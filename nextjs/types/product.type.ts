export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  sale?: number;
  type?: string;
}
