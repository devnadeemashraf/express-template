import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// If running in production, create a new PrismaClient instance
// Otherwise, reuse the instance from the global object in development
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Global object is used in development to preserve the instance during hot reloading
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;
