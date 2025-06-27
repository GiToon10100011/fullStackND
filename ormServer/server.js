const express = require("express"),
  app = express(),
  path = require("path"),
  cors = require("cors"),
  morgan = require("morgan");

require("dotenv").config(); // 환경변수 설정
const { sequelize } = require("./src/models"); // Sequelize 모델 불러오기
const productRouter = require("./src/routes/productRouter");

const port = process.env.PORT || 3333;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 제공

app.use("/api/products", productRouter);

//alter: true 기존 테이블에 변경사항이 있다면 변경사항만 추가/수정
//force: true 기존 테이블을 강제로 삭제 후 재생성
//force: false 기존 테이블이 존재하면 재생성하지 않음

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
    app.listen(port, () => {
      console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
    });
  })
  .catch((err) => {
    console.error("데이터베이스 연결 실패:", err);
  });
