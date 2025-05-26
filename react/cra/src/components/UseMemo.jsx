import React, { useEffect, useState } from "react";
import A from "./memo/A";
import B from "./memo/B";

const UseMemo = () => {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>UseMemo</h2>
      <p>msg: {value}</p>
      <p>posts: {posts.length}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <A msg={value} posts={posts} />
        <B msg={value} posts={posts} />
      </div>
    </div>
  );
};

export default UseMemo;
