import axios from "axios";
import { isTokenValid, refreshAccessToken } from "../utils/authUtil";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7777/api", // Adjust the base URL as needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // 토큰이 있는 경우 Authorization 헤더에 추가
    const token = sessionStorage.getItem("accessToken");
    if (isTokenValid(token as string)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        sessionStorage.setItem("accessToken", newAccessToken);
        config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Log the response data
    console.log("API Response:", response.data);

    // Store new token if available
    if (response.data.accessToken) {
      sessionStorage.setItem("accessToken", response.data.accessToken);
    }
    return response;
  },
  async (error) => {
    // Log errors
    const originalRequest = error.config;
    const status = error.response?.status;
    console.error("API Error:", error.response?.data || error.message);

    if (status === 400) {
      alert(error.response?.data?.message || "Bad Request");
      //400에러는 리디렉션보다 메시지만 보여주는게 적절하다. (비번 중복/입력값 검증 실패 등의 에러이기 때문에)
      return Promise.reject(error);
    }

    // Handle 401 errors (token expired)
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            sessionStorage.setItem("accessToken", newAccessToken);
            // Retry the original request with the new token
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            //리프레쉬토큰으로 받은 새로운 토큰으로 요청 재시도
            return axiosInstance.request(originalRequest);
          }
        } catch (error) {
          console.error(error);
          return Promise.reject(error);
        }
      }
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      window.location.href = "/login"; // Redirect to login on 401 error
      return Promise.reject(error);
    }
    if (status === 403) {
      alert("접근 권한이 없습니다.");
      window.location.href = "/login"; // Redirect to login on 403 error
      return Promise.reject(error);
    }
  }
);
