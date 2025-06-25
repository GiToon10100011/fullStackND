import type { IUser } from "../components/users/types/user.type";
import { create } from "zustand";

export interface IAuthState {
  isAdmin?: boolean; // Optional, depending on your use case
  userInfo: IUser | null;
  showModal?: boolean; // Optional, if you want to manage modal state
  setUserInfo: (user: IUser | null) => void;
  setShowModal: (show: boolean) => void; // Optional, if you want to manage modal state
}

const authStore = create<IAuthState>((set) => ({
  isAdmin: false,
  userInfo: null,
  setUserInfo: (userInfo) =>
    set({ userInfo, isAdmin: userInfo?.role === "ADMIN" }),
  showModal: false,
  setShowModal: (show) => set({ showModal: show }),
}));

export default authStore;
