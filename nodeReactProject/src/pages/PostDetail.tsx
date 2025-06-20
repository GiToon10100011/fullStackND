import React, { useEffect } from "react";
import {
  AiFillDislike,
  AiFillHeart,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { postStore } from "../stores/postStore";
import { imageUrlFormatter } from "../utils/formatters/imageUrlFormatter";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const fetchPostFromId = postStore((state) => state.fetchPostFromId);
  const deletePost = postStore((state) => state.deletePost);
  const post = postStore((state) => state.post);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      fetchPostFromId(Number(id)).catch((error) => {
        console.error("Failed to fetch post:", error);
        navigate("/posts");
      });
    } else {
      navigate("/posts");
    }
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    if (window.confirm("글을 삭제하시겠습니까?")) {
      await deletePost(Number(id));
      navigate("/posts");
    }
  };

  return (
    <div className="container py-5">
      <div className="row my-4">
        <div className="col-lg-10 col-md-12 mx-auto">
          <h1 className="display-5 fw-bold text-center mb-5">
            <span className="border-bottom border-3 pb-2">Post #{id}</span>
          </h1>

          <div className="text-end mb-3">
            <a
              href={`/postEdit/${id}`}
              className="btn btn-outline-primary me-2"
            >
              <AiFillEdit className="me-1" /> Edit
            </a>
            <button className="btn btn-outline-danger" onClick={handleDelete}>
              <AiFillDelete className="me-1" /> Delete
            </button>
          </div>

          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3">
              <h4 className="card-title fw-bold">{post?.title}</h4>
            </div>
            <div className="card-body">
              <div className="mb-4 text-center">
                <img
                  src={imageUrlFormatter(post?.imageUrl)}
                  alt="Post image"
                  className="img-fluid rounded shadow-sm"
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div className="px-3 py-4 bg-light rounded">
                <p className="lead mb-4">{post?.content}</p>
                <div className="d-flex gap-3">
                  <button className="btn btn-sm btn-outline-danger">
                    <AiFillHeart size={18} className="me-1" /> Like
                  </button>
                  <button className="btn btn-sm btn-outline-success">
                    <AiFillDislike size={18} className="me-1" /> Dislike
                  </button>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted bg-white">
              <small>
                Created on {post?.createdAt} by {post?.author}
              </small>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <a href="/posts" className="btn btn-secondary">
              <BiArrowBack className="me-1" /> Back to Post List
            </a>
          </div>

          <div className="mt-5 pt-3 border-top">
            <h4 className="mb-4">Comments</h4>

            {/* Comment list would go here */}
            <div className="card mb-3">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">User Name</h6>
                <p className="card-text">This is a comment.</p>
                <small className="text-muted">2023-05-02</small>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Add a Comment</h5>
                <textarea
                  className="form-control mb-3"
                  placeholder="Write your comment here..."
                  rows={3}
                ></textarea>
                <button className="btn btn-primary">Post Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
