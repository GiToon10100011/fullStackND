const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
    if (err) {
      console.error("파일 전송 오류:", err);
      res.status(500).send("서버 오류");
    } else {
      console.log("파일 전송 완료");
    }
  });
});

app.get("/users", (req, res) => {
  const users = [
    { name: "홍길동", email: "hong@example.com" },
    { name: "김철수", email: "kim@example.com" },
    { name: "이영희", email: "lee@example.com" },
  ];

  let userListHtml = "<h1>모든 회원 목록</h1>";
  userListHtml += "<ul>";
  users.forEach((user, index) => {
    userListHtml += `<li><a href="/users/${index + 1}">${user.name} (${
      user.email
    })</a></li>`;
  });
  userListHtml += "</ul>";
  res.send(userListHtml);
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(
    `<h1>회원 상세 정보</h1><p>회원 ID: ${userId}</p>`
  );
});

app.use(express.static(path.join(__dirname, "public")));
//public 폴더 내에 정적인 파일들 (이미지, html, css, js 등)을 제공하기 위해
//express.static 미들웨어를 사용하여 정적 파일을 제공한다.

app.use((req, res) => {
  res.status(404).send("<h1>페이지를 찾을 수 없습니다.</h1>");
});

app.set("port", 9090);

app.listen(app.get("port"), () => {
  console.log("Server is listening on port " + app.get("port"));
});
