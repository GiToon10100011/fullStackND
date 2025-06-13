import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../reducers/TodoReducer"; // Assuming you have a TodoReducer

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos); // Accessing todos from the Redux store
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [text, setText] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
      setText("");
    }
  };
  return (
    <div>
      <h2>Todo App</h2>
      <p>This is a simple Todo application.</p>
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                Remove
              </button>
              <button
                onClick={() => {
                  setEditingTodo(todo.id);
                  setEditingText(todo.text);
                }}
              >
                Edit
              </button>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo({ id: todo.id }))}
              />
            </li>
          ))}
        </ul>
        <h2>Add Todo</h2>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Enter todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default TodoApp;
