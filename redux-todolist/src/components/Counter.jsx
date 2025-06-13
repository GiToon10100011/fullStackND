import React from "react";
import { decrement, increment } from "../reducers/CounterReducer";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </p>
    </div>
  );
};

export default Counter;
