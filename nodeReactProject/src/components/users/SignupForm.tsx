import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import type { UserRole } from "./types/user.type";
import { checkEmailDuplicates, signup } from "../../api/userApi";

const SignupForm = () => {
  const navigate = useNavigate();
  const { user, isDuplicated, setField, setIsDuplicated, reset } = userStore();
  const [errorMsg, setErrorMsg] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setField(name as keyof typeof user, value);
  };

  const handleCheckDuplicates = async () => {
    const { email } = user;
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }
    try {
      const response = await checkEmailDuplicates(email);
      setIsDuplicated(response.isDuplicated);
      if (response.isDuplicated) {
        alert(response.message);
        setErrorMsg("중복된 이메일입니다.");
        emailRef.current?.focus();
      } else {
        alert(response.message);
        setIsDuplicated(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.error("중복 체크 실패:", error);
      setIsDuplicated(false);
      setErrorMsg("중복 체크에 실패했습니다. 나중에 다시 시도해주세요.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, role } = user;
    // Validate all fields individually with trimming
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      nameRef.current?.focus();
      return;
    }
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current?.focus();
      return;
    }
    if (!role) {
      alert("역할을 선택해주세요.");
      return;
    }
    if (isDuplicated) {
      alert("이메일 중복 체크를 해주세요.");
      emailRef.current?.focus();
      return;
    }

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("password", password);
      data.append("role", role as UserRole); // UserRole 타입으로 변환
      await signup(data);

      reset();
      // 성공적으로 회원가입 후, 홈으로 이동
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center">Signup</h1>

      <form onSubmit={handleSubmit}>
        {/* 이름 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">이름</label>
          <input
            className="form-control"
            name="name"
            onChange={handleChange}
            value={user.name}
            ref={nameRef}
          />
        </div>

        {/* 이메일 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">이메일</label>
          <input
            className="form-control"
            name="email"
            onChange={handleChange}
            value={user.email}
            ref={emailRef}
          />
          <button
            type="button"
            onClick={handleCheckDuplicates}
            className="btn btn-outline-success mt-2"
          >
            중복 체크
          </button>
          <div className="mt-1 small">{errorMsg}</div>
        </div>

        {/* 비밀번호 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">비밀번호</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            ref={passwordRef}
          />
        </div>

        {/* 역할 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">역할</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="roleUser"
              value="USER"
              checked={user.role === "USER"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="roleUser">
              USER
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="roleAdmin"
              value="ADMIN"
              checked={user.role === "ADMIN"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="roleAdmin">
              ADMIN
            </label>
          </div>
        </div>

        {/* 버튼 */}
        <div className="text-center">
          <button className="btn btn-primary me-2" type="submit">
            회원가입
          </button>
          <button className="btn btn-secondary" type="reset" onClick={reset}>
            초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
