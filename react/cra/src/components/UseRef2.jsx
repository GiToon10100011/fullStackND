import React, { useRef } from "react";

const UseRef2 = () => {
  let ref = useRef(0);
  return (
    <div>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
        }}
      >
        증가
      </button>
      <p>{ref.current}</p>
    </div>
  );
};

export default UseRef2;
