import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isLoggedin, user, logout } = useAuth();
  return (
    <header className={styles.header}>
      <div className="inner">
        <h1 className={styles.logo}>
          <Link to="/">logo</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={"/about"}>about</Link>
            </li>
            <li>
              <Link to={"/skill"}>skills</Link>
            </li>
            <li>
              {isLoggedin ? (
                <div className={styles.user}>
                  <span>{user?.id}</span>
                  <button
                    type="button"
                    onClick={logout}
                    className={styles.logout}
                  >
                    logout
                  </button>
                </div>
              ) : (
                <Link to={"/login"}>login</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
