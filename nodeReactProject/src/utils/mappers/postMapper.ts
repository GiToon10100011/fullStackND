import type { IPost } from "../../components/posts/types/post.type";

// utils/postMapper.ts
export function mapPostFromDB(post: any): IPost {
  return {
    author: post.author,
    id: post.id,
    title: post.title,
    content: post.content,
    createdAt: post.created_at,
    imageUrl: post.file,
    // 나머지 필드들...
  };
}
