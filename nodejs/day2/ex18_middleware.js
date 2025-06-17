const http = require("http"),
  express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("1. 미들웨어 요청 처리..");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Express Middleware Test</h1>");
  next();
});

app.use((req, res, next) => {
  console.log("2. 또 다른 미들웨어 요청 처리..");
  req.user = "Toon"; //user명 설정
  res.write("<p>두 번째 미들웨어에서 응답을 추가합니다.</p>");
  next();
});

app.use((req, res, next) => {
  console.log("3. 마지막 미들웨어 요청 처리..");
  res.write("<p>마지막 미들웨어에서 응답을 추가합니다.</p>");
  next();
});

// 라우팅
app.get("/", (req, res) => {
  console.log("GET 요청 처리");
  res.write("<p>GET 요청에 대한 응답입니다.</p>");
  if (req.user === "Toon") {
    throw new Error("나가 임마");
  }
  res.end(); // 응답을 종료합니다.
});

const auth = (req, res, next) => {
  console.log("auth 미들웨어 들어옴...");
  //인증 받은 경우 헤더에 "Authorization" : "Bearer 토큰" 형식으로 보냄
  if (!req.headers || !req.headers.authorization) {
    return res
      .status(401)
      .end(
        `<h1>${req.user}님은 인증받지 않은 사용자입니다. 401 Forbidden</h1>`
      );
  }
  next();
};

//2. 라우터 미들웨어 설정
app.get("/user", auth, (req, res) => {
  console.log("GET /user 요청 처리");
  res.write(`<p>사용자: ${req.user}</p>`);
  res.end(); // 응답을 종료합니다.
});

http.createServer(app).listen(5555, () => {
  console.log("서버가 http://localhost:5555 에서 실행 중입니다.");
});

// 3. 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end("<h1>서버 오류 발생</h1>");
});
