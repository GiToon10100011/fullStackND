import React from "react";
import TodoForm from "./TodoForm";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import { TodoProvider } from "../contexts/TodoContext";

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
        <TodoCount />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
