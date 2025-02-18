type TLogSourceType = "REQUEST" | "RESPONSE" | "DEBUG";

const beutifyLogs = (
  type: TLogSourceType,

  id: string,
  timestamp: Date,
  method: string,
  route: string,

  statusCode?: number,
  data?: any
) => {
  let log = `[${type}][${timestamp}][ID:${id}][${method} ${route}]`;

  if (statusCode) {
    log += `[CODE:${statusCode}]`;
  }

  if (data) {
    log += ` -> ${JSON.stringify(data)}`;
  }
  return log;
};

export { beutifyLogs };
