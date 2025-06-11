import { NavigateFunction } from "react-router-dom";

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

interface IUser {
  email: string;
  password: string;
}

interface IJoinUser extends IUser {
  id: string;
  phone: string;
}

export interface ICartStore {
  items: IProduct[];
  cartItems: IProduct[];
  cartCount: number;
  currentUser: string | null;
  fetchItems: () => void;
  getItemCategory: (category: string) => IProduct[];
  addCart: (item: IProduct) => void;
  removeFromCart: (id: number) => void;
  memberUser: (user: IJoinUser, navigate: NavigateFunction) => void;
  login: (user: IUser, navigate: NavigateFunction) => void;
  logout: () => void;
}
