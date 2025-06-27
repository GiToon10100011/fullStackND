import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/PostEdit";
import Signup from "./pages/Signup";
import UserList from "./pages/Users";
import LoginModal from "./components/users/LoginModal";
import authStore from "./stores/authStore";
import { useEffect } from "react";
import { getUser } from "./api/userApi";
import type { IUser } from "./components/users/types/user.type";
import Chat from "./components/chat/Chat";

function App() {
  const { setUserInfo } = authStore();

  const requestUserInfo = async () => {
    // 사용자 정보를 요청하는 API 호출
    // accessToken를 통해 서버쪽에 인증된 사용자 정보를 요청
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      if (!accessToken) {
        console.warn("Access token is not available.");
        return;
      }
      const response = await getUser(accessToken);
      if (response.result === "success") {
        // 사용자 정보를 성공적으로 가져온 경우
        setUserInfo(response.data as IUser);
      } else {
        console.error("Failed to fetch user info:", response.message);
      }
    } catch (error) {
      console.error("Error fetching user information:", error);
      alert(error);
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  useEffect(() => {
    requestUserInfo();
  }, []);
  return (
    <>
      <div className="container fluid py-5">
        <BrowserRouter>
          <Row>
            <Col className="mb-5">
              <Header />
            </Col>
          </Row>
          <Row className="main">
            <Col
              xs={12}
              sm={4}
              md={4}
              lg={3}
              className="d-none d-sm-block mt-3"
            >
              <SideMenu />
            </Col>
            <Col xs={12} sm={8} md={8} lg={9}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/postEdit/:id" element={<EditPost />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin/users" element={<UserList />} />
                <Route path="/admin/users" element={<UserList />} />
                <Route path="/chatting" element={<Chat />} />
                {/* <Route path="/login" element={<LoginModal />} /> */}
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col lg={12}></Col>
          </Row>
        </BrowserRouter>
      </div>
      <Footer />
      <LoginModal />
    </>
  );
}

export default App;
