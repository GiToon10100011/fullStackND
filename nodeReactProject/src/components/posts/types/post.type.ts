export interface IPost {
  id: number;
  author: string;
  title: string;
  content: string;
  file?: File;
  createdAt: string;
  imageUrl?: string;
}
