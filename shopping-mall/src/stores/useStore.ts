import { create } from "zustand";
import { ICartStore, IProduct } from "../types/product.type";

const useStore = create<ICartStore>((set, get) => ({
  items: [],
  cartItems: [],
  cartCount: 0,
  fetchItems: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      set({ items: data });
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ items: [] });
    }
  },
  getItemCategory: (category: string) => {
    const allItem = get().items;
    if (!category || category === "all") return allItem;
    return allItem.filter((item) => item.category === category);
  },
  addCart: (item: IProduct) => {
    const cartItems = get().cartItems;
    set({ cartItems: [...cartItems, item] });
  },
  removeFromCart: (id: number) => {
    const cartItems = get().cartItems;
    set({ cartItems: cartItems.filter((item) => item.id !== id) });
  },
}));

export default useStore;
