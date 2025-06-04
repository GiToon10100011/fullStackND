import React from "react";
import { useCounter } from "../contexts/CounterContext";

const CounterState = () => {
  const { count, increment } = useCounter();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterState;
