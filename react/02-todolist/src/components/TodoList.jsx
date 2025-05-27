import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos, removeAllTodos } = useContext(TodoContext);
  return (
    <div className="todo-list">
      <button onClick={removeAllTodos}>전체 삭제</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
