import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("자식이 렌더링 되었습니다.");
  return <button onClick={onClick}>자식 버튼</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  console.log("부모 렌더링");

  const childClick = useCallback(() => {
    console.log("자식이 클릭되었습니다.");
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>부모 증가</button>
      <Child onClick={childClick} />
    </div>
  );
}
