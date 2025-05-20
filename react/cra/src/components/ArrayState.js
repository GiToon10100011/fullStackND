import React, { useState } from "react";

const ArrayState = () => {
  const [title, setTitle] = useState(["남자", "하의", "상의"]);

  const handleChangeTitle = () => {
    let newArr = [...title];
    newArr[0] = "여자";
    setTitle(newArr);
  };
  return (
    <div>
      <button onClick={handleChangeTitle}>클릭</button>
      <div>{title[0]}</div>
    </div>
  );
};

export default ArrayState;
