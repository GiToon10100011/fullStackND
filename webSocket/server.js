const http = require("http"),
  fs = require("fs"),
  path = require("path"),
  express = require("express"),
  socketio = require("socket.io");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/send-broad", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "sendBroad.html"));
});
app.get("/send-private", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "sendPrivate.html"));
});

const server = http.createServer(app);

const io = socketio().listen(server);
io.sockets.on("connection", (socket) => {
  const uid = socket.id;
  console.log(uid + " 클라이언트 접속");
  //클라이언트에서 챗 서버에 접속하면 클라이언트와 통신에 필요한 소켓을 콜백으로 전달해줌.
  console.log("클라이언트가 접속했습니다.");

  socket.on("disconnect", () => {
    console.log("클라이언트가 접속을 종료했습니다.");
  });

  socket.on("chat message", (msg) => {
    console.log("메시지: " + msg);
    //접속한 모든 클라이언트에게 메시지 전송, 클라이언트에서는 sendAll 이벤트라는 이벤트를 수신해야함.
    io.sockets.emit("sendAll", msg);
    io.emit("chat message", msg);
  });

  socket.on("chat broad message", (msg) => {
    console.log("브로드캐스트 메시지: " + msg);
    //접속한 모든 클라이언트에게 브로드캐스트 메시지 전송
    socket.broadcast.emit("sendBroad", msg);
  });

  socket.on("chat private message", (msg) => {
    console.log("프라이빗 메시지: " + msg);
    //접속한 특정 클라이언트에게 프라이빗 메시지 전송
    //uid 지정시 나한테만 당연히 전송 
    //이거 활용해서 나와의 채팅 만들었구나..!
    io.sockets.to(uid).emit("sendPrivate", msg);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
