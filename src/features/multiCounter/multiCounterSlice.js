import { createSlice } from "@reduxjs/toolkit";

export const multiCounterSlice = createSlice({
  name: "multiCounter",
  initialState: [],
  reducers: {
    // const index = state.payload?.index,
    multiAdd: (state) => {
      return [...state, { count: 0 }];
    },
    multiIncrement: (state, action) => {
      return state.map((counter, index) => {
        if (index === action.payload) {
          return { count: counter.count + 1 };
        }
        return counter;
      });
    },
    multiDecrement: (state, action) => {
      return state.map((counter, index) => {
        if (index === action.payload) {
          return { count: counter.count - 1 };
        }
        return counter;
      });
    },
  },
});

export const { multiAdd, multiIncrement, multiDecrement } =
  multiCounterSlice.actions;
export default multiCounterSlice.reducer;
