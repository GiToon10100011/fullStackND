import { useEffect } from "react";

export default function PageTwo() {
  useEffect(() => {
    console.log("PageTwo 컴포넌트가 마운트되었습니다.");
    return () => {
      console.log("PageTwo 컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  return (
    <div>
      <h2>Page Two</h2>
      <p>This is the second page content</p>
    </div>
  );
}
