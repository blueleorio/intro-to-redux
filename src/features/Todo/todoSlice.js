import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [], filter: "all" },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    filterTodo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
