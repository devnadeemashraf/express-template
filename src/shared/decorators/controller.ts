import { Request, Response, NextFunction } from "@/app";
import AppError from "@/shared/utils/app-error";

/**
 * Controller decorator function.
 *
 * This decorator enhances controller methods by:
 *  - Binding the method to the class instance to preserve the `this` context.
 *  - Wrapping the method in a try-catch block to handle errors uniformly.
 *  - Caching the bound method on first access for improved performance.
 *
 * Usage:
 * Apply @Controller() to any controller method that follows the signature
 * (request: Request, response: Response, next: NextFunction) => Promise<any>.
 */
export function Controller(): MethodDecorator {
  return function (
    target: Object, // The prototype of the class.
    propertyKey: string | symbol, // The name of the method being decorated.
    descriptor: PropertyDescriptor // The method's descriptor containing the original method.
  ) {
    // Save the original method for later use.
    const originalMethod = descriptor.value;

    // Return a new property descriptor with a getter that binds the method.
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get() {
        // When accessed on the prototype, return the unbound original method.
        if (this === (target as Function).prototype) {
          return originalMethod;
        }
        // Create a new function that binds the original method to the instance.
        const boundMethod = async (
          request: Request,
          response: Response,
          next: NextFunction
        ) => {
          try {
            // Invoke the original method with the correct `this` context.
            const result = await originalMethod.apply(this, [
              request,
              response,
              next,
            ]);
            return result;
          } catch (error) {
            // If an error occurs, forward it to Express's error-handling middleware.
            next(
              error instanceof AppError
                ? error
                : new AppError(
                    "Controller Operation Failed",
                    "INTERNAL_SERVER_ERROR",
                    error
                  )
            );
          }
        };

        // Cache the bound method on the instance for faster subsequent accesses.
        Object.defineProperty(this, propertyKey, {
          value: boundMethod,
          configurable: true,
          writable: true,
        });
        // Return the newly bound method.
        return boundMethod;
      },
    };
  };
}
