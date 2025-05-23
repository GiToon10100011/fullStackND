import React, { useState } from "react";
import "../calculator.css";
import { evaluate } from "mathjs";

const Calculator = () => {
  const buttons: string[] = [
    "C",
    "←",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ];
  
  const [input, setInput] = useState("");

  const calculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const value = button.id;
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      setInput("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((button, i) => (
          <button key={i} id={button} onClick={handleCalculate}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
