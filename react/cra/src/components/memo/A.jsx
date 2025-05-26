import React from "react";

const A = ({ msg, posts }) => {
  console.log("A 렌더링");
  return (
    <div>
      <h2>A</h2>
      <p>value: {msg}</p>
      <p>posts: {posts.length}</p>
      <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default A;
