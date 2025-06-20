import React from "react";

const SignupForm = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center">Signup</h1>

      <form>
        {/* 이름 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">이름</label>
          <input className="form-control" name="name" />
        </div>

        {/* 이메일 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">이메일</label>
          <input className="form-control" name="email" />
          <button type="button" className="btn btn-outline-success mt-2">
            중복 체크
          </button>
          <div className="mt-1 small">중복 확인 메시지</div>
        </div>

        {/* 비밀번호 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">비밀번호</label>
          <input className="form-control" type="password" name="passwd" />
        </div>

        {/* 역할 */}
        <div className="mb-3 col-md-8 offset-md-2">
          <label className="form-label">역할</label>
          <select className="form-select" name="role">
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        {/* 버튼 */}
        <div className="text-center">
          <button className="btn btn-primary me-2" type="submit">
            회원가입
          </button>
          <button className="btn btn-secondary" type="button">
            초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
