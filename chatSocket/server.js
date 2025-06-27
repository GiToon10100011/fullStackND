const express = require("express"),
  http = require("http"),
  path = require("path"),
  cors = require("cors");

const { Server } = require("socket.io");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // 모든 도메인 허용
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`클라이언트 ${socket.id} 접속`);
  socket.on("sendMessage", (data) => {
    console.log(`${data.sender}: ${data.message}`);
    // 모든 클라이언트에게 메시지 전송
    io.emit("receiveMessage", {
      message: data.message,
      sender: data.sender,
    });
  });
});

server.listen(5555, () => {
  console.log("서버가 http://localhost:5555 에서 실행 중입니다.");
});
