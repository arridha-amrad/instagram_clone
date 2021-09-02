export interface AuthData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  identity: string;
  isLogin: boolean;
}

export type RegisterData = Pick<AuthData, "email" | "password" | "username">;

export type LoginData = Pick<AuthData, "identity" | "password">;

export type ForgotPasswordData = Pick<AuthData, "email">;

export interface VerifyEmailData {
  verificationCode: string;
}

export type ResetPasswordData = Pick<
  AuthData,
  "password" | "confirmPassword"
> & { token: string };

export type SetUserData = Pick<AuthData, "email" | "username" | "isLogin">;
