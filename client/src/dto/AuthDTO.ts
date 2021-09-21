interface AuthData {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  password: string;
  role: string;
  birthDay: string;
  // optional
  isActive: boolean;
  isLogin: boolean;
  isVerified: boolean;
  identity: string;
  confirmPassword: string;
  // setup by mongoDB
  createdAt: Date;
  updatedAt: Date;
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

export type AuthenticatedUserData = Omit<
  AuthData,
  "identity" | "confirmPassword" | "password"
>;
