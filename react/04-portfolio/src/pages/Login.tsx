import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import styles from "./login.module.css";

const Login = () => {
  const { isLoggedin, login, logout } = useAuth();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(id, password);
  };
  return (
    <section className={styles.container}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
        {isLoggedin ? (
          <button type="button" onClick={logout}>
            로그아웃
          </button>
        ) : null}
      </form>
    </section>
  );
};

export default Login;
