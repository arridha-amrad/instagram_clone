export interface AuthData {
  username: string;
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
  identity: string;
  isLogin: boolean;
  birthDay: string;
}

export interface BirthDayData {
  date: string;
  month: string;
  year: string;
}

export type RegisterData = Pick<
  AuthData,
  "email" | "password" | "username" | "fullName" | "birthDay"
>;

export type LoginData = Pick<AuthData, "identity" | "password">;

export type ForgotPasswordData = Pick<AuthData, "email">;

export interface VerifyEmailData {
  verificationCode: string;
  email: string;
}

export type ResetPasswordData = Pick<
  AuthData,
  "password" | "confirmPassword"
> & { token: string };

export type SetUserData = Pick<AuthData, "email" | "username" | "isLogin">;
