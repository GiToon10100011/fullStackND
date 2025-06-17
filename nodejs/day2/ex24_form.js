const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config(); // 환경변수 설정
const port = process.env.PORT || 3333;

// 미들웨어 설정
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //json 데이터를 자동으로 파싱
app.use(express.urlencoded({ extended: true })); //urlencoded 데이터를 자동으로 파싱

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.get("/login", (req, res) => {
  const { name, password, email } = req.query;
  res.send(`<h1>Login Information</h1>
            <p>Name: ${name}</p>
            <p>Password: ${password}</p>
            <p>Email: ${email}</p>`);
  res.end();
});

app.post("/login", (req, res) => {
  const { name, password, email } = req.body;
  res.send(`<h1>Login Information</h1>
            <p>Name: ${name}</p>
            <p>Password: ${password}</p>
            <p>Email: ${email}</p>`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
