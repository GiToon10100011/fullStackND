//mysql2 모듈 설치 (Promise 지원)

const express = require("express");
const mysql = require("mysql2");

//db 연결 정보 설정, 보통 이를 env에 저장
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "ezenDB",
  user: "toon",
  password: "1234",
});

// console.log(connection);

//DB와 연결하기

connection.connect((err) => {
  try {
    if (err) {
      console.error("DB 연결 실패:", err);
      return;
    }
    console.log("DB 연결 성공");
  } catch (error) {
    console.error("DB 연결 중 예외 발생:", error);
  }
});

//쿼리
connection.query("select * from members order by id desc", (err, result) => {
  try {
    console.log(result);
    result.forEach((row) => {
      console.log(`아이디: ${row.id}, 이름: ${row.name}, 이메일: ${row.email}`);
    });
  } catch (error) {
    console.error("쿼리 실행 중 예외 발생:", error);
  }
});

connection.end();
