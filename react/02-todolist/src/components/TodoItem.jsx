import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <li className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          id={todo.id}
        />
        <label htmlFor={todo.id} className={todo.completed ? "completed" : ""}>
          {todo.text}
        </label>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
