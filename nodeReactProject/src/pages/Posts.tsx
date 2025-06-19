import PostForm from "../components/posts/PostForm";
import PostList from "../components/posts/PostList";

const Posts = () => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center">Create a New Post</h2>
          <PostForm />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Posts;
