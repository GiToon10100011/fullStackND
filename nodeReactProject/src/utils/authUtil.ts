import axiosInstance from "../api/axiosInstance";

interface JWTPayload {
  exp: number;
  [key: string]: any;
}

//토큰 유효성 검사
export const isTokenValid = (token: string): boolean => {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])) as JWTPayload;
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp > currentTime;
  } catch (error) {
    console.error("Invalid token format", error);
    return false;
  }
};

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    console.error("No refresh token found");
    return null;
  }
  try {
    const response = await axiosInstance.post("/auth/refresh", {
      refreshToken,
    });
    const newAccessToken = response.data?.accessToken;
    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    return null;
  }
};
