/*
# .gitignore 파일 내용
.env
-----------
환경에 따른 설정 관리: 개발, 테스트, 프로덕션 환경에 따라 다른 .env파일
.env.development, .env.test(단위테스트 전용), .env.production 등으로 파일을 나누고, 
각각의 환경에 맞는 설정을 관리할 수 있습니다.
*/
// app.js

const dotenv = require("dotenv");
dotenv.config(); // dotenv를 사용하여 .env 파일에서 환경 변수를 로드하고 'process.env'객체에 추가한다.
//process.env를 이용해 환경변수를 쉽게 접근할 수 있다.

const express = require("express");
const app = express();

// 환경 변수 사용
const port = process.env.PORT || 3000; // PORT 환경 변수가 설정되지 않은 경우 3000을 기본값으로 사용

const databaseUrl = process.env.DB_HOST;

// 서버 설정
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`Database URL is: ${databaseUrl}`);
});
