import React from "react";
import Title from "../components/Title";
import useStore from "../stores/useStore";
import { useNavigate } from "react-router-dom";
import "./scss/signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const { memberUser } = useStore();
  const [form, setForm] = React.useState({
    email: "",
    id: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // 여기에 회원가입 로직을 추가하세요.
    console.log("회원가입 정보:", form);
    alert("회원가입이 완료되었습니다.");
    const user = {
      email: form.email,
      id: form.id,
      password: form.password,
      phone: form.phone,
    };
    // 폼 초기화
    setForm({
      email: "",
      id: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    memberUser(user, navigate);
  };

  return (
    <div className="container">
      <div className="content-inner">
        <Title title="회원가입" />
        <div className="form">
          <form action="" onSubmit={handleSubmit}>
            <p>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="phone"
                placeholder="전화번호를 입력하세요"
                required
                onChange={handleChange}
              />
            </p>
            <p>
              <input type="submit" value="가입하기" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
