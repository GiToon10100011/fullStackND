import { createContext, useEffect, useState } from "react";

const TODOS_KEY = "todos";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    console.log("🔍 savedTodos:", savedTodos);
    if (savedTodos) {
      const parsed = JSON.parse(savedTodos);
      console.log("📦 parsedTodos:", parsed);
      setTodos(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeAllTodos = () => {
    if (window.confirm("전체 삭제하시겠습니까?")) {
      setTodos([]);
      localStorage.removeItem(TODOS_KEY);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        toggleTodo,
        addTodo,
        deleteTodo,
        removeAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
