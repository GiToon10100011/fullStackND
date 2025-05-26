import "./App.css";
import ArrayState from "./components/ArrayState";
import ClassComponent from "./components/ClassComponent";
import ClassProps from "./components/ClassProps";
import ClassComponentState from "./components/ClassState";
import ClassUseState from "./components/ClassUseState";
import { ColorBox } from "./components/ColorBox";
import StateFilter from "./components/StateFilter";
import StateParent from "./components/StateParent";
import DarkContextComponent from "./components/DarkContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";
import UseParent from "./components/UseParent";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponentState />
      <ClassProps day={"목"} time={100} />
      <ClassUseState />
      <ArrayState />
      <StateParent />
      <ColorBox />
      <StateFilter />
      <DarkContextComponent />
      <UseEffect />
      <UseRef />
      <UseRef2 />
      <hr />
      <UseParent />
      <UseMemo />
      <UseCallback />
    </div>
  );
}

export default App;
