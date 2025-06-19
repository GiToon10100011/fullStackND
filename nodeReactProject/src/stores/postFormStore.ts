import { create } from "zustand";

// post 글쓰기/수정에 필요한 폼 입력 상태 관리
// FormData 객체를 통해 데이터를 전송

interface IPostFormStore {
  formData: {
    author: string;
    title: string;
    content: string;
    file?: File;
    newFile?: File;
  };
  //모든 속성을 옵셔널 타입으로 변경해주는 Partial
  setFormData: (data: Partial<IPostFormStore["formData"]>) => void;
  resetForm: () => void;
}

export const postFormStore = create<IPostFormStore>((set) => ({
  formData: {
    author: "",
    title: "",
    content: "",
    file: undefined,
    newFile: undefined,
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () =>
    set({
      formData: {
        author: "",
        title: "",
        content: "",
        file: undefined,
        newFile: undefined,
      },
    }),
}));
