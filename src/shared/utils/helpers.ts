export const getEnv = <T>(key: string, fallback: T) => {
  const envEntry = process.env[key];
  return envEntry ? envEntry : fallback;
};
