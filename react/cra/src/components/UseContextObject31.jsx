import PersonContext from "./PersonContext";
import { UserContextProfile } from "./UserContextProfile";

export default function UseContextObject31() {
  // UsercontextProfile넣기
  const users = {
    name: "전우진",
    email: "woojin03@google.com",
    tel: "010-1234-5678",
  };

  return (
    <PersonContext.Provider value={users}>
        Person
      <UserContextProfile />
    </PersonContext.Provider>
  );
  // usercontextProfile
  // 프로필
  // 이름
  // 이메일
  // 전화번호
}
