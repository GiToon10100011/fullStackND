import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
