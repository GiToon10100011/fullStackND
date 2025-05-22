import { useEffect, useState } from "react";

export default function UseEffectapi33() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
    console.log("api호출하기", data);
  }, []);

  return (
    <div>
      <h1>api 데이터터</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "로딩중..."}
    </div>
  );
}
