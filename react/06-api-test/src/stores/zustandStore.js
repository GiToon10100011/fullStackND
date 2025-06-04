import { create } from "zustand";

const zustandStore = create((set) => ({
  count: 0,
  setCount: () => set((prev) => ({ count: prev.count + 1 })),
  msg: "This is from Zustand",
}));

export default zustandStore;