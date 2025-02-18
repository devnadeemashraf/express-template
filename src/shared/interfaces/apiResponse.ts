export interface APIResponse<T = null> {
  status: 'OK' | 'PENDING' | 'ERROR';
  message: string;
  data: T | null;
  error: {
    code: string;
    details?: any;
  } | null;
  meta?: any;
}
