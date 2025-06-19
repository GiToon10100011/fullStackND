import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";

function App() {
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
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col lg={12}></Col>
          </Row>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
