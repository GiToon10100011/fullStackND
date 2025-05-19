import "./App.css";
import ClassProps from "./components/ClassComponent";
import Generic from "./components/Generic";

function App() {
  return (
    <>
      <ClassProps day="금" num={100} />
      <Generic />
    </>
  );
}

export default App;
