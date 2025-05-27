import { useState, useEffect } from "react";
import A from "./A";
import B from "./B";
import C from "./C";
export default function UseMemo38() {
  // input
  // json 데이터 저장하기
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex">
        <A msg={value} posts={posts} />
        <B msg={value} posts={posts} />
        <C msg={value} posts={posts} />
      </div>
    </div>
  );
}
