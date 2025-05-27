import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoCount = () => {
  const { todos } = useContext(TodoContext);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  return (
    <div className="todo-count">
      완료: {completedTodos} / 전체: {todos.length} / 미완료: {todos.length - completedTodos}
    </div>
  );
};

export default TodoCount;
