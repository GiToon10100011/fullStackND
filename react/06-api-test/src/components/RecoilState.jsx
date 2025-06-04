import React from "react";
import { useRecoilState } from "recoil";
import recoilStore from "../stores/recoilStore";

const RecoilState = () => {
  const [count, setCount] = useRecoilState(recoilStore);
  // const [msg] = useRecoilState(recoilStore);
  return (
    <div>
      <h1>Counter</h1>
      <p>{count.count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count.msg}</p>
    </div>
  );
};

export default RecoilState;
