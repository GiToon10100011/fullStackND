import { Button, ListGroup, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";

const SideMenu = () => {
  const { showModal, setShowModal } = authStore();
  return (
    <Stack
      gap={2}
      className="mx-auto w-100 sticky-top"
      style={{
        position: "sticky",
        top: "80px",
        zIndex: 1020,
        alignSelf: "flex-start",
      }}
    >
      <Button variant="primary" as={Link as any} to="/">
        Home
      </Button>
      <Button variant="outline-success" as={Link as any} to="/signup">
        SignUp
      </Button>
      <div className="alert alert-danger">a님 로그인 중 ...</div>
      <Button variant="outline-success">Logout</Button>
      <Button variant="outline-success" onClick={() => setShowModal(true)}>
        SignIn
      </Button>
      <Button variant="outline-danger">인증 테스트</Button>
      <hr></hr>
      <ListGroup>
        <ListGroup.Item as={Link} to="/hook1">
          Menu 1
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/hook2">
          Menu 2
        </ListGroup.Item>
      </ListGroup>
    </Stack>
  );
};

export default SideMenu;
