import React from "react";

const UseChild = ({ age, name }) => {
  console.log("자식 렌더링");
  return (
    <div>
      <h2>자식</h2>
      <p>age: {age}</p>
      <p>name: {name.lastName}</p>
      <p>name: {name.firstName}</p>
    </div>
  );
};

export default React.memo(UseChild);
