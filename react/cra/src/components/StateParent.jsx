import React, { useState } from "react";

const InputChild = ({ text, onChildChange }) => {
  const handleChange = (e) => {
    onChildChange(e.target.value);
  };
  return <input value={text} onChange={handleChange} placeholder="Child" />;
};

const StateParent = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>자식컴포넌트에서 입력한 값이 부모가 가진 상태변수값을 변경</h2>
      <InputChild text={text} onChildChange={setText} />
      <input value={text} placeholder="Parent"/>
    </div>
  );
};

export default StateParent;
