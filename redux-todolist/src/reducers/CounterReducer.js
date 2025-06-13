import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "CounterReducer",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterReducer.actions;
export default counterReducer.reducer;
