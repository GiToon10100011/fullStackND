const http = require("http");

const server = http.createServer((req, res) => {
  // 요청 분석
  console.log(`요청 방식: ` + req.method); // GET, PING, POST, PUT, DELETE 등
  console.log(`요청 URL: ` + req.url);

  // 응답 작성
  res.statusCode = 200; // 상태 코드 설정
  res.setHeader(`Content-Type`, `text/html; charset=utf-8`); // 헤더에 Content-Type 설정
  res.write(`<h1>Hello Node.js</h1>`);
  res.write(`<p>요청 URL: ${req.url}</p>`);
  res.write(`<p>요청 방식: ${req.method}</p>`);
  res.end(); // 응답 종료
});

server.listen(3333, () => {
  console.log(`서버가 http://localhost:3333 에서 실행 중입니다.`);
});
