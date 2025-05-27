import React, { useMemo } from "react";

const Message = ({ msg }) => {
  return <p>{msg}</p>;
};

const ListItem = ({ post }) => {
  return <li>{post.title}</li>;
};

const List = ({ posts }) => {
  const meListItem = useMemo(() => {
    posts.map((post, index) => {
      return <ListItem key={index} post={post} />;
    });
  }, [posts]);

  return <ul>{meListItem}</ul>;
};

const C = ({ msg, posts }) => {
  const meMessage = useMemo(() => {
    return <Message msg={msg} />;
  }, [msg]);
  const meList = useMemo(() => {
    return <List posts={posts} />;
  }, [posts]);

  return (
    <div>
      <h2>C 컴포넌튼</h2>
      {meMessage}
      {meList}
    </div>
  );
};

export default C;
