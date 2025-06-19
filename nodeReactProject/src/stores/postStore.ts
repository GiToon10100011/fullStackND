//post 목록 가져오기, 1건 post 조회, post 삭제 관리
import { create } from "zustand";
import type { IPost } from "../components/posts/types/post.type";
import { fetchPostList } from "../api/postApi";

interface IPostStore {
  postList: IPost[];
  totalCount: number;
  fetchPostList: () => Promise<void>;
}

export const postStore = create<IPostStore>((set) => ({
  postList: [],
  totalCount: 0,
  fetchPostList: async () => {
    try {
      //api 호출
      const response = await fetchPostList();
      set({
        postList: response.posts,
        totalCount: response.count,
      });
      console.log("Post list fetched successfully:", response.posts);
    } catch (error) {
      console.error((error as Error).message);
    }
  },
}));
