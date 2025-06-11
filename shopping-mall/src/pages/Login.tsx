import React, { useState } from "react";
import Title from "../components/Title";
import useStore from "../stores/useStore";
import { useNavigate } from "react-router-dom";
import "./scss/login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useStore();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // add handleChange function to update form state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  // add handleSubmit function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: form.email,
      password: form.password,
    };
    // 폼 초기화
    setForm({
      email: "",
      password: "",
    });
    login(user, navigate);
  };

  return (
    <div className="container">
      <div className="content-inner">
        <Title title="로그인" />
        <div className="form">
          <form action="" onSubmit={handleSubmit}>
            <p>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <button type="submit">로그인</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
