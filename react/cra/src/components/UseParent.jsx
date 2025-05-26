import React, { useMemo, useState } from "react";
import UseChild from "./UseChild";

const UseParent = () => {
  console.log("부모 렌더링");
  const [age, setAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const handleParentAge = () => {
    setAge(age + 1);
  };

  const handleChildAge = () => {
    setChildAge(childAge + 1);
  };

  const name = useMemo(
    () => ({
      lastName: "홍",
      firstName: "길동",
    }),
    []
  );

  return (
    <>
      <h2>부모</h2>
      <p>age: {age}</p>
      <UseChild age={childAge} name={name} />
      <button onClick={handleParentAge}>부모 나이 증가</button>
      <button onClick={handleChildAge}>자식 나이 증가</button>
    </>
  );
};

export default UseParent;
