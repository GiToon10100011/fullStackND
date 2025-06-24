import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { postStore } from "../stores/postStore";
import { imageUrlFormatter } from "../utils/formatters/imageUrlFormatter";
import { postFormStore } from "../stores/postFormStore";
import { updatePost } from "../api/postApi";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const { post, fetchPostFromId } = postStore();
  const { formData, setFormData, resetForm } = postFormStore();

  const [previewUrl, setPreviewUrl] = useState<string>("");

  console.log(previewUrl);

  const fetchAndSet = async () => {
    if (id) await fetchPostFromId(Number(id));
  };

  const handleReset = () => {
    fetchAndSet();
    console.log(formData.fileUrl);
    setPreviewUrl("");
  };

  useEffect(() => {
    fetchAndSet();
    return () => resetForm();
  }, [id]);

  useEffect(() => {
    if (post) {
      setFormData({
        author: post.author,
        content: post.content,
        title: post.title,
        fileUrl: post.imageUrl,
        newFile: post.file,
      });
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setFormData({ newFile: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.author || !formData.title || !formData.content) {
      alert("모든 필드를 입력해주세요.");
      throw new Error("모든 필드를 입력해주세요.");
    }
    try {
      const data = new FormData();
      data.append("author", formData.author);
      data.append("title", formData.title);
      data.append("content", formData.content);
      if (formData.newFile) {
        console.log(formData.newFile);
        data.append("file", formData.newFile);
      }
      await updatePost(data, Number(id));
    } catch (error) {
      console.error("Error updating post:", error);
      alert("게시글 수정 중 오류가 발생했습니다.");
      return;
    }
  };

  return (
    <div className="row my-1">
      <div className="col-md-8 mx-auto p-3">
        <h1 className="text-center my-5">게시글 수정</h1>

        <form onSubmit={handleSubmit}>
          {/* 제목 */}
          <div className="mb-3">
            <label className="form-label">제목</label>
            <input
              className="form-control my-2"
              placeholder="제목을 입력하세요"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* 작성자 */}
          <div className="mb-3">
            <label className="form-label">작성자</label>
            <input
              className="form-control my-2"
              placeholder="작성자 이름"
              value={formData.author}
              disabled
              onChange={handleChange}
            />
          </div>

          {/* 내용 */}
          <div className="mb-3">
            <label className="form-label">내용</label>
            <textarea
              className="form-control my-2"
              rows={6}
              placeholder="내용을 입력하세요"
              value={formData.content}
              name="content"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* 첨부파일 */}
          <div className="mb-3">
            <label className="form-label">첨부파일</label>
            <input
              className="form-control"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
            <div className="mt-4 text-muted">
              <img
                src={previewUrl || imageUrlFormatter(formData.fileUrl)}
                alt="기존 첨부파일"
                style={{ width: "100%" }}
              />
              <div>
                현재 파일: {previewUrl || formData.fileUrl || "No Image"}
              </div>
            </div>
          </div>

          {/* 버튼들 */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-1 px-3 btn-sm">
              글수정
            </button>
            <button
              className="btn btn-warning mx-1 px-3 btn-sm"
              onClick={handleReset}
              type="reset"
            >
              다시쓰기
            </button>
            <button className="btn btn-secondary mx-1 px-3 btn-sm">
              <Link
                className="inline-block w-full h-full text-inherit"
                to="/posts"
              >
                글 목록
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
