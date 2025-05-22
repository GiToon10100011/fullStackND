import React, { createContext, useState } from "react";
import Dark from "./Dark";

export const DarkContext = createContext();

export default function DarkContextComponent() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <DarkContext.Provider value={{ isDark, setIsDark }}>
        <Dark />
      </DarkContext.Provider>
    </div>
  );
}
