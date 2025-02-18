import 'dotenv/config';

import { getEnv } from '@/shared/utils/helpers';

const config = {
  nodeEnv: getEnv<'development' | 'production'>('NODE_ENV', 'development'),

  host: getEnv<string>('HOST', 'localhost'),
  port: getEnv<number>('PORT', 9001),

  swaggerEnabled: getEnv<boolean>('SWAGGER_ENABLED', false),

  databaseURL: getEnv<string>('DATABASE_URL', 'postgres://postgres:password@localhost:5432/local'),
  redisURL: getEnv<string>('REDIS_URL', 'redis://localhost:6379'),

  token: {
    cookieSecret: getEnv<string>('COOKIE_SECRET', 'somesuperhardsecret'),
    jwtSecret: getEnv<string>('JWT_SECRET', 'somesuperhardsecret'),
    jwtExpiry: getEnv<string>('JWT_EXPIRES_IN', '15m'),
    refreshExpiry: getEnv<string>('REFRESH_TOKEN_EXPIRES_IN', '7d'),
  },

  cors: {
    origin: getEnv<string[]>('CORS_ORIGIN', ['http://localhost:3000', 'http://localhost:5173']),
  },

  rateLimit: {
    duration: getEnv<string>('RATE_LIMIT_DURATION', '15s'),
    cap: getEnv<string>('RATE_LIMIT_MAX', '100'),
  },

  api: {
    v1: '/api/v1',
    v2: '/api/v2',
  },
};

export default config;
