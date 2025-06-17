const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(async (req, res) => {
    if (req.url === "/") {
      // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      // res.write(`<a href="/public/pizzaUI.html">피자 주문하기</a>`);
      // res.end();

      const filename = path.join("public", "pizzaUI.html");

      //fs 이용해서 filename 읽고 파일 데이터를 res로 내보내기
      fs.readFile(filename, (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(data); // 파일 데이터를 응답으로 보냄
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.write(`<h1>페이지를 찾을 수 없습니다.</h1>`);
      res.end();
    }
  })
  .listen(5555, () => {
    console.log("서버가 http://localhost:5555 에서 실행 중입니다.");
  });
