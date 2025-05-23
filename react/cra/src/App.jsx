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
import UseContext from "./components/UseContext";
import UseContextObject31 from "./components/UseContextObject31";
import UseEffectClean from "./components/UseEffectClean";
import UseEffectapi33 from "./components/UseEffectapi33";
import UseEffect33 from "./components/UseEffect33";
import UseFillter30 from "./components/UseFillter30";
import UserEffect32 from "./components/UserEffect32";
import UseRef from "./components/UseRef";
import UseRef2 from "./components/UseRef2";

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
    </div>
  );
}

export default App;
