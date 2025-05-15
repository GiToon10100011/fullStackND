import "./App.css";
import ClassComponent from "./components/classComponent";
import ClassProps from "./components/ClassProps";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassProps day={"목"} time={100}/>
    </div>
  );
}

export default App;
