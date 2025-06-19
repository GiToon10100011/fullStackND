const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", (req, res) => {
  const str = `
    <div>
      <h1>USER 관리</h1>
      <ul>
        <li><a href="/api/users/list">목록</a></li>
        <li><a href="/api/users/write">글쓰기</a></li>
      </ul>
    </div>`;
  res.send(str);
  res.end();
});

module.exports = router;
