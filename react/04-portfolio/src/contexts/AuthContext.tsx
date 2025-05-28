import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  isLoggedin: boolean;
  user: null | IUser;
  login: (id: string, password: string) => void;
  logout: () => void;
}

interface IUser {
  id: string;
  password: string;
}

export const AuthContext = React.createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  // 쿠키의 이름 지정, 일종의 키 역할
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [isLoggedin, setIsLoggedin] = useState<boolean>(!!cookies.user);
  const [user, setUser] = useState<null | IUser>(null);

  useEffect(() => {
    if (cookies.user) {
      setIsLoggedin(true);
      setUser(cookies.user);
    } else {
      setIsLoggedin(false);
      setUser(null);
    }
  }, [cookies.user]);

  const login = (id: string, password: string) => {
    const expireDate = new Date(new Date().getTime() + 2 * 60 * 1000);
    setIsLoggedin(true);
    setUser({ id, password });
    // cookie path, use / as the path if you want your cookie to be accessible on all pages
    setCookie("user", { id, password }, { path: "/", expires: expireDate });
    navigate("/");
  };
  const logout = () => {
    removeCookie("user");
    setIsLoggedin(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
