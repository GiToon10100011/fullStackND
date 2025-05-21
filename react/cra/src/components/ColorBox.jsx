// 부모에 색상변경 변수 선언
// 자식요소에 변경
// 형제에게 전달하여 배경색이 변경

import { useState } from "react";

function ColorInput({ color, onChange }) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function ColorDisplay({ color }) {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
  );
}

export function ColorBox() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div>
      <h2>원하는 색상을 선택하세요.</h2>
      <ColorInput color={color} onChange={setColor} />
      <ColorDisplay color={color} />
    </div>
  );
}
