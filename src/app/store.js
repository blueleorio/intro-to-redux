import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import multiCounterReducer from "../features/multiCounter/multiCounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    multiCounter: multiCounterReducer,
  },
});
