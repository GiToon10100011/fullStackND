import type { IPost } from "../components/posts/types/post.type";
import axiosInstance from "./axiosInstance";

//post관련 api요청을 서버에 보내는 함수
export interface IPostResponse {
  posts: IPost[];
  count: number;
}

export const fetchPostList = async (): Promise<IPostResponse> => {
  const response = await axiosInstance.get<IPostResponse>("/posts");
  return response.data;
};
