import React from "react";
import zustandStore from "../stores/zustandStore";

const CounterZustand = () => {
  const { count, setCount, msg } = zustandStore();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={setCount}>Increment</button>
      <p>{msg}</p>
    </div>
  );
};

export default CounterZustand;
