import { useState } from "react";

const Generic = () => {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
      <p>값: </p>
    </div>
  );
};

export default Generic;
