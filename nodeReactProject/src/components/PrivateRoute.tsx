// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = authStore((state) => state.userInfo)?.accessToken;
  const isAuthenticated = !!accessToken;

  if (!isAuthenticated) {
    alert("로그인이 필요합니다.");
    console.warn("Access denied. User is not authenticated.");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
