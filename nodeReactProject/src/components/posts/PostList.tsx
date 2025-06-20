import { Link } from "react-router-dom";
import { postStore } from "../../stores/postStore";
import { useEffect } from "react";
import { imageUrlFormatter } from "../../utils/formatters/imageUrlFormatter";

const PostList = () => {
  const fetchPostList = postStore((state) => state.fetchPostList);
  const postList = postStore((state) => state.postList);
  const totalCount = postStore((state) => state.totalCount);

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <div className="post-list container py-4">
      <h3 className="mb-4 text-center fw-bold">
        총 게시글 수: {totalCount} 개
      </h3>

      <div className="row g-4">
        {postList.map((post, index) => (
          <div className="col-md-6" key={`post${index}`}>
            <div className="card shadow-sm hover-shadow transition h-100">
              <div className="row g-0">
                <div className="col-12 mb-3">
                  <img
                    src={imageUrlFormatter(post.imageUrl)}
                    alt={post.title}
                    className="img-fluid rounded-top w-100 object-fit-cover"
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="col-12">
                  <div className="card-body pt-0 px-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small className="text-muted">
                        <i className="bi bi-calendar me-1"></i> {post.createdAt}
                      </small>
                      <span className="badge bg-primary">{post.author}</span>
                    </div>
                    <Link
                      to={`/posts/${post.id}`}
                      className="text-decoration-none"
                    >
                      <h5 className="card-title fw-bold mb-2">{post.title}</h5>
                    </Link>
                    <p
                      className="card-text text-muted mb-3"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        lineHeight: "1.5",
                      }}
                    >
                      {post.content}
                    </p>
                    <Link
                      to={`/posts/${post.id}`}
                      className="btn btn-outline-primary"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {postList.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">게시글이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default PostList;
