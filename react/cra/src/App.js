import "./App.css";
import ClassComponent from "./components/ClassComponent";
import ClassProps from "./components/ClassProps";
import ClassComponentState from "./components/ClassState";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponentState />
      <ClassProps day={"목"} time={100} />
    </div>
  );
}

export default App;
