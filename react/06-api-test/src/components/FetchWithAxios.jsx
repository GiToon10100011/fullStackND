import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchWithAxios = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    // axios는 따로 json으로 파싱할 필요없음.
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
          },
        }
      );
      setPost(response.data);
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
      <h2 style={{ color: "red" }}>Axios 사용</h2>
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

export default FetchWithAxios;
