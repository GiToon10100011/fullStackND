import React, { useRef } from "react";

const UseRef = () => {
  // Dom요소 / 인스턴스에 대한 참조 생성
  const inputRef = useRef(null);
  
  return (
    <div>
      <input type="text" placeholder="글자를 입력해주세요" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>포커스</button>
    </div>
  );
};

export default UseRef;
