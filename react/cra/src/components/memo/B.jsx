import React from "react";

const Message = React.memo(({ msg }) => {
  return <p>value: {msg}</p>;
});

const List = React.memo(({ posts }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

const ListItem = ({ post }) => {
  return <li key={post.id}>{post.title}</li>;
};

const B = ({ msg, posts }) => {
  console.log("B 렌더링");
  return (
    <div>
      <h2>B</h2>
      <Message msg={msg} />
      <List posts={posts} />
    </div>
  );
};

export default B;
