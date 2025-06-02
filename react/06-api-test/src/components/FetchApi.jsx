import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <h2>fetch 사용</h2>
      <ul className="post-list">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {post.map((item) => (
          <li key={item.id} className="post-item">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FetchApi;
