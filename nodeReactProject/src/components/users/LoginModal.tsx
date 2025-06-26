import React, { useRef, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import authStore from "../../stores/authStore";
import { login } from "../../api/userApi";
import type { AxiosError } from "axios";
import type { IUser } from "./types/user.type";

const LoginModal = () => {
  const { showModal, setShowModal } = authStore();
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const { setUserInfo } = authStore();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = user;
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
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    try {
      console.log("test");
      const response = await login(data);
      // 여기에 로그인 처리 추가 (예: 토큰 저장 등)
      if (response.result === "success") {
        alert(`${response.data?.name}님, 환영합니다!`);
        sessionStorage.setItem("accessToken", response.data?.accessToken || "");
        localStorage.setItem("refreshToken", response.data?.refreshToken || "");
        setUserInfo(response.data as IUser); // 사용자 정보 저장
        setUser({ email: "", password: "" }); // 입력 필드 초기화
        setShowModal(false); // 모달 닫기
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      // 서버에서 온 에러 메시지 표시
      if (error.response?.data?.message) {
        alert("❌ 로그인 실패: " + error.response.data.message);
      } else {
        alert("❌ 로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="p-4 mx-auto" xs={10} sm={10} md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>이메일 주소</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="이메일 주소"
                    ref={emailRef}
                    onChange={handleChange}
                    value={user.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="비밀번호"
                    ref={passwordRef}
                    onChange={handleChange}
                    value={user.password}
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => setShowModal(false)}
                  >
                    취소
                  </button>
                  <button type="submit" className="btn btn-primary">
                    로그인
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
