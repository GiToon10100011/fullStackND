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
});

server.listen(5555, () => {
  console.log("서버가 http://localhost:5555 에서 실행 중입니다.");
});
