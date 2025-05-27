import React, { useState, useMemo } from "react";
import UseChild from "./UseChild";

const UseParent = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const handleParent = () => {
    setParentAge(parentAge + 1);
  };

  const handleChild = () => {
    setChildAge(childAge + 1);
  };

  // const name = {
  //   lastName: "전",
  //   firstName: "우진",
  // };

  const name = useMemo(() => {
    return {
      lastName: "전",
      firstName: "우진",
    };
  }, []);

  console.log("부모가 렌더링 되었습니다.");
  return (
    <>
      <h2>부모</h2>
      <p>age</p>
      <button onClick={handleParent}>부모 나이 증가</button>
      <button onClick={handleChild}>자식 나이증가</button>
      {/* <UseChild name="전우진" age={childAge} /> */}
      <UseChild name={name} />
    </>
  );
};

export default UseParent;
