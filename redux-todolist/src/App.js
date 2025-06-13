import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoApp />
    </div>
  );
}

export default App;
