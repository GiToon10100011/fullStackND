import { Button, ListGroup, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";
import { logout } from "../api/userApi";

const SideMenu = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setShowModal } = authStore();
  const handleLogout = async () => {
    try {
      await logout(userInfo?.email || "");
      setUserInfo(null); // 사용자 정보 초기화
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      alert("로그아웃 되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    } finally {
      setShowModal(false);
    }
  };

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
      {!userInfo && (
        <Button variant="outline-success" as={Link as any} to="/signup">
          SignUp
        </Button>
      )}
      {userInfo ? (
        <div className="alert alert-danger">
          {userInfo.name}님 로그인 중 ...
        </div>
      ) : (
        <div className="alert alert-danger">로그인 중 ...</div>
      )}
      {userInfo && (
        <Button variant="outline-success" onClick={handleLogout}>
          Logout
        </Button>
      )}
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
