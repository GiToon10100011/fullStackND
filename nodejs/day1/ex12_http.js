const http = require("http");

http
  .createServer((req, res) => {
    const uri = req.url; // 요청 URL
    if (uri === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 상태 코드와 헤더를 동시에 설정할 수 있음.
      res.write(`<h1>홈페이지</h1>`);
      res.write(`<p>요청 URL: ${req.url}</p>`);
      res.write(`<a href="/hello">Hello 페이지로 이동</a>`);
      res.end(); // 응답 종료
    } else if (uri === "/hello") {
      res.statusCode = 200; // 상태 코드 설정
      res.setHeader(`Content-Type`, `text/html; charset=utf-8`); // 헤더에 Content-Type 설정
      res.write(`<h1>Hello Node.js</h1>`);
      res.write(`<p>요청 URL: ${req.url}</p>`);
      res.write(`<p>요청 방식: ${req.method}</p>`);
      res.end(); // 응답 종료
    } else if (uri === "/plain") {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }); // 상태 코드와 헤더를 동시에 설정할 수 있음.
      res.write(`안녕하세요, 이 페이지는 텍스트 형식입니다.\n`);
      res.write(`<p>태그가 그대로 텍스트로 출력됩니다.</p>`);
      res.write(`요청 URL: ${req.url}\n`);
      res.write(`요청 방식: ${req.method}\n`);
      res.end(); // 응답 종료
    } else {
      res.statusCode = 404; // 상태 코드 설정
      res.setHeader(`Content-Type`, `text/html; charset=utf-8`); // 헤더에 Content-Type 설정
      res.write(`<h1>페이지를 찾을 수 없습니다.</h1>`);
      res.end(); // 응답 종료
    }
  })
  .listen(5555, () => {
    console.log(`서버가 http://localhost:5555 에서 실행 중입니다.`);
  });
