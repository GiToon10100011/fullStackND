export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface ICartStore {
  items: IProduct[];
  cartItems: IProduct[];
  cartCount: number;
  fetchItems: () => void;
  getItemCategory: (category: string) => IProduct[];
  addCart: (item: IProduct) => void;
  removeFromCart: (id: number) => void;
}
