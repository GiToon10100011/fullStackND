import { useEffect, useRef, useState } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import "./Chat.css";
import authStore from "../../stores/authStore";
import socket from "./socket";

interface IMessage {
  sender: string;
  message: string;
}

const Chat = () => {
  const user = authStore((state) => state.userInfo);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const messageRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNickname(user?.name || ""); // 사용자 이름을 닉네임으로 설정
    if (!socket.connected) {
      socket.connect();
    }

    socket.on("receiveMessage", (data: IMessage) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: data.sender, message: data.message },
      ]);
      if (endRef.current) {
        setTimeout(() => {
          endRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end", // or 'nearest'
          });
        }, 0);
      }
    });
    console.log(messages);

    return () => {
      if (socket.connected) {
        socket.off("receiveMessage"); // 컴포넌트 언마운트 시 이벤트 리스너 제거
        socket.disconnect();
      }
    };
  }, []);

  const handleSendMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!user) {
      alert("로그인 후 채팅을 이용할 수 있습니다.");
      return;
    }
    socket.emit("sendMessage", {
      sender: nickname,
      message: message,
    });
    setMessage(""); // 메시지 전송 후 입력 필드 초기화
    if (messageRef.current) {
      messageRef.current.focus(); // 메시지 입력 필드에 포커스 유지
    }
  };

  return (
    <form onSubmit={handleSendMsg} className="wrap">
      <h2>
        <IoChatboxEllipsesOutline />
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "20px",
        }}
      >
        <span style={{ width: "15%", height: "100%" }}>닉네임: </span>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div className="msg">
        <div className="msg-list">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="msg-item"
              ref={index === messages.length - 1 ? endRef : null}
            >
              <strong>{msg.sender}</strong>: <span>{msg.message}</span>
            </div>
          ))}
        </div>
        {/* ref 설정, 스크롤 되도록 empty div를 채팅 메시지 목록 끝에 위치시킴. */}
      </div>
      <div className="input-wrap">
        <input
          type="text"
          name="message"
          placeholder="메시지 입력"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={messageRef}
          className="input_msg"
        />
        <button type="submit" className="btn btn-info mx-1">
          Send
        </button>
      </div>
    </form>
  );
};

export default Chat;
