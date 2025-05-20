import "./App.css";
import ArrayState from "./components/ArrayState";
import ClassComponent from "./components/ClassComponent";
import ClassProps from "./components/ClassProps";
import ClassComponentState from "./components/ClassState";
import ClassUseState from "./components/ClassUseState";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponentState />
      <ClassProps day={"목"} time={100} />
      <ClassUseState />
      <ArrayState />
    </div>
  );
}

export default App;
