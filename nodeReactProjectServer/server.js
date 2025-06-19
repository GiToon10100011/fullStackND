const express = require("express");
const path = require("path");
require("dotenv").config(); // 환경변수 설정
const morgan = require("morgan");
const cors = require("cors");

const indexRouter = require("./src/routes/indexRouter");
const userRouter = require("./src/routes/userRouter");
const postRouter = require("./src/routes/postRouter");

const app = express();
const port = process.env.PORT || 3333;

//미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터를 자동으로 파싱
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 제공
app.use(morgan("dev"));
app.use(cors());

//라우터와 연결설정
app.use("/", indexRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

//서버가동
app.listen(port, () => console.log(`Server is running on port ${port}`));
