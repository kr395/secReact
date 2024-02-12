import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button
              onClick={() => {
                setTodos(todos.filter((_, i) => i !== index));
              }}
            >
              ❌
            </button>{" "}
          </li>
        ))}
      </ul>
      <input id="inputTodo" type="text" placeholder="Add Todo"></input>
      <button
        onClick={() => {
          const inputTodo = document.getElementById("inputTodo").value;
          document.getElementById("inputTodo").value = "";
          setTodos((t) => [...t, inputTodo]);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
