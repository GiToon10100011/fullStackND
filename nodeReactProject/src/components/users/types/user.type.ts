export interface IUser {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  role: UserRole;
  accessToken?: string; // 로그인시 발급되는 토큰
  refreshToken?: string; // 로그인시 발급되는 리프레시 토큰
}

export type UserRole = "USER" | "ADMIN";


