const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config(); // 환경변수 설정

const app = express();

// DB 설정

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10, // 최대 연결 수
});

// Express 서버 라우팅 설정

app.use(express.json()); // JSON 데이터를 자동으로 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터를 자동으로 파싱

app.post("/api/users", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "형식이 올바르지 않습니다." });
  }
  try {
    const sql = "insert into members (name, email, password) values (?, ?, ?)";
    const [result] = await pool.query(sql, [name, email, password]);
    console.log(result);
    res.json({ status: "success", result });
  } catch (error) {
    console.error("Error in /api/users:", error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
});

app.listen(process.env.SERVER_PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT || 3333}`);
});
