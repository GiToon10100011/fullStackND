import type { IUser } from "../components/users/types/user.type";
import { create } from "zustand";

export interface IAuthState {
  isAuthenticated: boolean;
  isAdmin?: boolean; // Optional, depending on your use case
  user: IUser | null;
  showModal?: boolean; // Optional, if you want to manage modal state
  login: (user: IUser) => void;
  logout: () => void;
  setUser: (user: IUser) => void;
  reset: () => void;
  setShowModal: (show: boolean) => void; // Optional, if you want to manage modal state
}

const authStore = create<IAuthState>((set) => ({
  isAuthenticated: false,
  isAdmin: false, // You can set this based on your logic
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
  setUser: (user) => set({ user }),
  reset: () => set({ isAuthenticated: false, user: null }),
  showModal: false,
  setShowModal: (show) => set({ showModal: show }),
}));

export default authStore;
