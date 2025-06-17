const http = require("http");
const fs = require("fs").promises;
const path = require("path");

http
  .createServer(async (req, res) => {
    if (req.url === "/") {
      const filename = path.join("public", "tourSample.html");

      try {
        const data = await fs.readFile(filename);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } catch (err) {
        console.error("파일 읽기 오류:", err);
        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        res.write(`<h1>서버 오류</h1>`);
        res.end();
      }
    }
  })
  .listen(3333, () => {
    console.log("서버가 http://localhost:3333 에서 실행 중입니다.");
  });
