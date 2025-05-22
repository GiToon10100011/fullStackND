import React, { useContext } from "react";
import { DarkContext } from "./DarkContext";
export default function Dark() {
  const { isDark, setIsDark } = useContext(DarkContext);
  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h2>배경 테마 변경</h2>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
    </div>
  );
}
