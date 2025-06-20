const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const postController = require("../controllers/postController");

//multer 설정
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //첫번째값은 에러값으로, null을 넣으면 에러가 없음을 의미
    //두번째값은 저장할 디렉토리 경로
    callback(null, path.join(__dirname, "..", "..", "public", "uploads"));
  },
  filename: (req, file, callback) => {
    //파일이름 설정

    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    ); //파일 이름 인코딩 처리
    //파일 이름은 원래 파일
    const ext = path.extname(file.originalname); //파일 확장자 추출
    const basename = path.basename(file.originalname, ext); //파일 이름 추출
    const newFilename = `${basename}_${Date.now()}${ext}`; //새로운 파일 이름 생성
    callback(null, newFilename); //새로운 파일 이름으로 저장
  },
});

const uploader = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, //파일 크기 제한 (10MB)
});

//라우팅 설정
router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);
router.post("/", uploader.single("file"), postController.createPost);
router.delete("/:id", postController.deletePost);

module.exports = router;
