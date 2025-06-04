import { atom } from "recoil";

const recoilStore = atom({
  key: "recoilStore",
  default: {
    count: 0,
    msg: "This is from Recoil",
  },
});

export default recoilStore;