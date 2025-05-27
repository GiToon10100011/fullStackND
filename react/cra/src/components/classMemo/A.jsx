const A = ({ msg, posts }) => {
  console.log(posts);
  return (
    <div>
      <h2>A 컴포넌트</h2>
      <p>{msg}</p>
      <ul>
        {posts.map((post, index) => {
          return <li key={index}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default A;
