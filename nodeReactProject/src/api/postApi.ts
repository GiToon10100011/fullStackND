import type { IPost } from "../components/posts/types/post.type";
import axiosInstance from "./axiosInstance";

//post관련 api요청을 서버에 보내는 함수
export interface IPostResponse {
  posts: IPost[];
  count: number;
  totalPages: number;
  currentPage: number;
  size: number;
}

export interface IDetailPostResponse {
  post: IPost;
}

export const fetchPostList = async (page: number): Promise<IPostResponse> => {
  const response = await axiosInstance.get<IPostResponse>("/posts", {
    params: { page },
  });
  return response.data;
};

export const fetchPostFromId = async (id: number): Promise<IPost> => {
  const response = await axiosInstance.get<IDetailPostResponse>(`/posts/${id}`);
  return response.data.post;
};

export const createPost = async (postData: FormData): Promise<IPost> => {
  console.log(postData);
  const response = await axiosInstance.post("/posts", postData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/posts/${id}`);
};

export const updatePost = async (
  postData: FormData,
  id: number
): Promise<IPost> => {
  console.log(postData);
  const response = await axiosInstance.put(`/posts/${id}`, postData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
