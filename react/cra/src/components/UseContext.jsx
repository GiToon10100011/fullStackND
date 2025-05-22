import { useState } from "react";
import Dark from "./Dark";
import { ThemeContext } from "./ThemeContext";

export default function UseContext() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ isDark, toggle }}>
        <Dark />
      </ThemeContext.Provider>
    </div>
  );
}
