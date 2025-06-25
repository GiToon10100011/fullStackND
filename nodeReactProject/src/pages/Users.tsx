import { useEffect, useState } from "react";
import type { IUser } from "../components/users/types/user.type";
import { fetchUsers } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const UserList = () => {
  const userInfo = authStore((state) => state.userInfo);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    //인증 사용자, 인가 사용자여부를 검사하는 로직

    if (!userInfo) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    if (!userInfo.role || userInfo.role !== "ADMIN") {
      alert("관리자 권한이 필요합니다.");
      navigate("/");
      return;
    }

    //관리자일 경우에만 사용자 목록을 가져오는 API 호출
    const requestUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data || []);
      } catch (error) {
        console.error("회원 목록을 가져오는 중 오류 발생:", error);
        alert("회원 목록을 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    requestUsers();
  }, []);
  console.log(users);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4 className="text-center">Loading...</h4>
      </div>
    );

  return (
    <div className="container">
      <h2>회원 목록 [Admin Page - 관리자 전용]</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>회원ID</th>
            <th>이 름</th>
            <th>이메일</th>
            <th>ROLE</th>
            <th>가입일자</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
