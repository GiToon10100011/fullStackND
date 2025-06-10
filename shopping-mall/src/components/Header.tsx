import React from "react";
import "./scss/header.scss";
import { Link } from "react-router-dom";

type MenuItem = {
  key: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { key: "/", label: "홈" },
  { key: "/men", label: "남성" },
  { key: "/women", label: "여성" },
  { key: "/jewelry", label: "악세서리" },
  { key: "/electronics", label: "전자기기" },
];

const Header = () => {
  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </h1>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.key}>
                <Link to={`${item.key}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to="/login">
                <img src="/images/loginPassword.png" alt="login" />
                <p>로그인</p>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <img src="/images/loginMember.png" alt="signup" />
                    <p>회원가입</p>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src="/images/cart.png" alt="cart" />
                <p>장바구니<span className="cart-count">0</span></p>
              </Link>
            </li>
          </ul>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <button className="search-btn">
              <img src="/images/search.png" alt="search" />
            </button>          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
