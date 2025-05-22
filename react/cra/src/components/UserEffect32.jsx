import { useEffect } from "react";

export default function UserEffect32() {
  useEffect(() => {
    // 컴포넌트가 처음 렌더링 될때 한 번 실행
    // 주로 api호출, 초기설정이 필요한 경우 사용한다.
    console.log("컴포넌트가 마운트 되었습니다");
  }, []);
  return (
    <div>
      <h2>useEffect</h2>
    </div>
  );
}
