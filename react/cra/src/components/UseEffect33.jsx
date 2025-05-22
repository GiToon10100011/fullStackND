import { useEffect, useState } from "react";

export default function UseEffect33() {
  const [count, setCount] = useState(0);

  // 아떤 값이 변경되면 무조건 실행
  //   useEffect(() => {
  //     console.log("count");
  //   });

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
    console.log("count");
  };
  return (
    <div>
      <h2>[count]</h2>
      <button onClick={handleCount}>+</button>
    </div>
  );
}
