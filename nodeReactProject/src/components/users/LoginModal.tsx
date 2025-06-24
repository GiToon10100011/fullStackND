import React, { useRef, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import authStore from "../../stores/authStore";

const LoginModal = () => {
  const { showModal, setShowModal } = authStore();
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 처리 로직
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
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="reset"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            취소
          </button>
          <button type="submit" className="btn btn-primary">
            로그인
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
