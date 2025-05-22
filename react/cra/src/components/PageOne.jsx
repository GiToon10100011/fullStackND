import { useEffect } from "react";

export default function PageOne() {
  useEffect(() => {
    console.log("PageOne 컴포넌트가 마운트되었습니다.");
    return () => {
      console.log("PageOne 컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  return (
    <div>
      <h2>Page One</h2>
      <p>This is the first page content</p>
    </div>
  );
}
