//post 목록 가져오기, 1건 post 조회, post 삭제 관리
import { create } from "zustand";
import type { IPost } from "../components/posts/types/post.type";
import { deletePost, fetchPostFromId, fetchPostList } from "../api/postApi";
import { mapPostFromDB } from "../utils/mappers/postMapper";

interface IPostStore {
  postList: IPost[];
  totalCount: number;
  post: IPost | null;
  fetchPostList: () => Promise<void>;
  fetchPostFromId: (id: number) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
}

export const postStore = create<IPostStore>((set) => ({
  postList: [],
  totalCount: 0,
  post: null,
  fetchPostList: async () => {
    try {
      //api 호출
      const response = await fetchPostList();
      set({
        postList: response.posts.map(mapPostFromDB),
        totalCount: response.count,
      });
      console.log("Post list fetched successfully:", response.posts);
    } catch (error) {
      console.error((error as Error).message);
    }
  },
  fetchPostFromId: async (id: number) => {
    try {
      const response = await fetchPostFromId(id);
      if (response) {
        set({ post: mapPostFromDB(response) });
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  },
  deletePost: async (id: number) => {
    try {
      // 여기에 삭제 API 호출 로직을 추가하세요.
      console.log(`Post with ID ${id} deleted successfully.`);
      // 삭제 후 postList를 다시 가져오거나 업데이트하는 로직을 추가할 수 있습니다.
      await deletePost(id);
      set({ post: null });
      await fetchPostList(); // 삭제 후 전체 글 목록을 다시 가져옵니다.
    } catch (error) {
      console.error((error as Error).message);
    }
  },
}));
