import { create } from "zustand";
import { ICartStore, IProduct } from "../types/product.type";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../lib/firebase/firebase";

const useStore = create<ICartStore>((set, get) => ({
  items: [],
  cartItems: [],
  cartCount: 0,
  currentUser: null,
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
  memberUser: async (user, navigate) => {
    try {
      const { email, password } = user;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      const newUser = userCredential.user;
      console.log("회원가입 성공:", newUser);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
      if (error instanceof Error) {
        alert(`회원가입 실패: ${error.message}`);
      } else {
        alert("회원가입 실패: 알 수 없는 오류가 발생했습니다.");
      }
    }
  },
  login: async (user, navigate) => {
    try {
      const { email, password } = user;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const loggedInUser = userCredential.user;
      if (!loggedInUser.emailVerified) {
        alert("이메일 인증이 필요합니다. 이메일을 확인해주세요.");
        throw new Error("이메일 인증이 필요합니다. 이메일을 확인해주세요.");
      }
      set({ currentUser: loggedInUser.email });
      console.log("로그인 성공:", loggedInUser);
      alert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      if (error instanceof Error) {
        alert(`로그인 실패: ${error.message}`);
      } else {
        alert("로그인 실패: 알 수 없는 오류가 발생했습니다.");
      }
    }
  },
  logout: async () => {
    await auth.signOut();
    set({ currentUser: null });
    alert("로그아웃 되었습니다.");
  },
}));

export default useStore;
