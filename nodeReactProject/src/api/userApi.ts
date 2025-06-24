import axiosInstance from "./axiosInstance";

// 공통 api 응답
// 제네릭 초깃값으로 undefined부여
export interface IUserResponse<T = undefined> {
  result: "success" | "fail";
  message?: string;
  data?: T; //성공시에만 존재
}

export type CreateUserResponse = IUserResponse<IUserPayload>;

//회원가입 성공시 payload
export interface IUserPayload {
  insertId: number;
}

export interface IEmailCheckResponse {
  isDuplicated: boolean;
  message: string;
}

export const signup = async (userData: FormData): Promise<CreateUserResponse> => {
  const response = await axiosInstance.post("/users", userData);

  return response.data;
};

export const checkEmailDuplicates = async (
  email: string
): Promise<IEmailCheckResponse> => {
  const response = await axiosInstance.get(`/users/check-email`, {
    params: { email },
  });
  return response.data;
};

// 전체 회원 목록 조회
export const fetchUsers = async (): Promise<IUserResponse> => {
  const response = await axiosInstance.get("/admin/users");
  return response.data;
};
