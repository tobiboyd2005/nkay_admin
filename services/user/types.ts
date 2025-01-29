// services/user/types.ts
export interface LoginPayload {
  userName: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  expiresAt: string;
  userId: string;
  circuitId: string;
  circuit: string;
}

export type ResponseError = {
  key: string;
  errorMessages: string[];
};

export type ApiResponse<T> = {
  status: number;
  statusText: string;
  data: T;
  errors: ResponseError[];
};