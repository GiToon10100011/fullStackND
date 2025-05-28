import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <CookiesProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <footer></footer>
        </AuthProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
