import { create } from "zustand";
import type { IUser } from "../components/users/types/user.type";

interface IUserState {
  user: IUser;
  isDuplicated: boolean;
  //actions
  setField: (field: keyof IUser, value: string | null) => void;
  setIsDuplicated: (isDuplicated: boolean) => void;
  reset: () => void;
}

export const userStore = create<IUserState>((set) => ({
  user: {
    name: "",
    email: "",
    password: "",
    id: 0,
    createdAt: "",
    role: "USER",
  },
  isDuplicated: false,
  setField: (field, value) =>
    set((state) => ({
      user: { ...state.user, [field]: value },
    })),
  setIsDuplicated: (isDuplicated) => set({ isDuplicated }),
  reset: () =>
    set({
      user: {
        name: "",
        email: "",
        password: "",
        id: 0,
        createdAt: "",
        role: "USER",
      },
      isDuplicated: false,
    }),
}));
