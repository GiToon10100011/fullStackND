import React from "react";

const Message = React.memo(({ msg }) => {
  return <p>{msg}</p>;
});

const ListItem = React.memo(({ post }) => {
  return <li>{post.title}</li>;
});

const List = React.memo(({ posts }) => {
  return (
    <ul>
      {posts.map((post, index) => {
        return <ListItem key={index} post={post} />;
      })}
    </ul>
  );
});

const B = ({ msg, posts }) => {
  return (
    <div>
      <h2>B 컴포넌튼</h2>
      <Message msg={msg} />
      <List posts={posts} />
    </div>
  );
};

export default B;
