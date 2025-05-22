import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState(null);
  // 마운트된 경우 최초 실행
  useEffect(() => {
    console.log("Mount");
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log("api 호출");
  }, []);

  return (
    <div>
      {data && (
        <div>
          {data.map((item) => (
            <div>{item.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseEffect;
