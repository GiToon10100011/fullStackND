import React from "react";

const EditPost = () => {
  return (
    <div className="row my-1">
      <div className="col-md-8 mx-auto p-3">
        <h1 className="text-center my-5">게시글 수정</h1>

        <form>
          {/* 제목 */}
          <div className="mb-3">
            <label className="form-label">제목</label>
            <input
              className="form-control my-2"
              placeholder="제목을 입력하세요"
            />
          </div>

          {/* 작성자 */}
          <div className="mb-3">
            <label className="form-label">작성자</label>
            <input className="form-control my-2" placeholder="작성자 이름" />
          </div>

          {/* 내용 */}
          <div className="mb-3">
            <label className="form-label">내용</label>
            <textarea
              className="form-control my-2"
              rows={6}
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>

          {/* 첨부파일 */}
          <div className="mb-3">
            <label className="form-label">첨부파일</label>
            <input className="form-control" type="file" />
            <div className="mt-2 text-muted">
              <img
                src="첨부파일경로"
                alt="기존 첨부파일"
                style={{ width: "120px" }}
              />
              <div>현재 파일: 파일명</div>
            </div>
          </div>

          {/* 버튼들 */}
          <div className="text-center">
            <button className="btn btn-primary mx-1 px-3 btn-sm">글수정</button>
            <button className="btn btn-warning mx-1 px-3 btn-sm">
              다시쓰기
            </button>
            <button className="btn btn-secondary mx-1 px-3 btn-sm">
              글 목록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
