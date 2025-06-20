import { useRef, type FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { postFormStore } from "../../stores/postFormStore";
import { createPost } from "../../api/postApi";
import { postStore } from "../../stores/postStore";

const PostForm = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { formData, setFormData, resetForm } = postFormStore();
  const fetchPostList = postStore((state) => state.fetchPostList);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);
    if (files && files.length) {
      setFormData({ newFile: files[0] });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append("author", String(formData.author));
      postData.append("title", formData.title);
      postData.append("content", formData.content);
      if (formData.newFile) {
        postData.append("file", formData.newFile);
      }

      // 서버에 데이터 전송
      const response = await createPost(postData);

      // 전체글을 가져오는 api 호출(업데이트가 필요하기에 다시 호출)

      console.log("Post created successfully:", response);
      await fetchPostList();
      resetForm();
      
      if (fileRef.current) {
        fileRef.current.value = ""; // 파일 입력 초기화
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} method="post">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="author"
            required
            onChange={handleChange}
            value={formData.author}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            onChange={handleChange}
            value={formData.content}
          />
        </Form.Group>
        <Form.Group controlId="file">
          <Form.Label>File</Form.Label>
          <Form.Control ref={fileRef} type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button className="my-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default PostForm;
