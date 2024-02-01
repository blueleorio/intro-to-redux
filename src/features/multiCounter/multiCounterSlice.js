import { createSlice } from "@reduxjs/toolkit";

export const multiCounterSlice = createSlice({
  name: "multiCounter",
  initialState: {
    value: [],
  },
  reducers: {
    multiAdd: (state) => {
      state.value.push(0);
    },
    multiIncrement: (state, action) => {
      const index = action.payload;
      state.value[index] += 1;
    },
    multiDecrement: (state, action) => {
      const index = action.payload;

      state.value[index] -= 1;
    },
    multiIncrementByAmount: (state, action) => {
      const { index, amount } = action.payload;
      state.value[index] += amount;
    },
  },
});

export const {
  multiAdd,
  multiIncrement,
  multiDecrement,
  multiIncrementByAmount,
} = multiCounterSlice.actions;
export default multiCounterSlice.reducer;
