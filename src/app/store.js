import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/reducer";

const initialState = {};
const store = configureStore(
  combineReducers({
    counter: counterReducer,
  })
);
