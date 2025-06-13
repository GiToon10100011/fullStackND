// 모든 전역 변수를 담는 객체
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterReducer";
import todoReducer from "../reducers/TodoReducer";

const store = configureStore({
  reducer: {
    counterReducer,
    todoReducer,
  },
});

export default store;
