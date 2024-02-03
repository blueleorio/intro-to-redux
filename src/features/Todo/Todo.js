import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";

export function Todo() {
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Todo</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements[0];
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
