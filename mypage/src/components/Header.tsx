import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // 매뉴로 사용할 오브젝트
  const menus = [
    {
      key: "About",
      label: "ABOUT",
      path: "/about",
    },
    {
      key: "Skill",
      label: "SKILL",
      path: "/skill",
    },
    {
      key: "Portfolio",
      label: "PORTFOLIO",
      path: "/portfolio",
    },
    {
      key: "Contact",
      label: "CONTACT",
      path: "/contact",
    },
    {
      key: "TodoList",
      label: "TODOLIST",
      path: "/todolist",
    },
  ];

  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1>
            <Link to="/">
              <img src={"/images/logo.png"} alt="logo" />
            </Link>
          </h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              {menus.map((menu) => (
                <li key={menu.key}>
                  <Link to={menu.path}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
