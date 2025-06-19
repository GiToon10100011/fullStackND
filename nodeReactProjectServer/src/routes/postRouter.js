const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// router.get("/", (req, res) => {
//   const str = `
//     <div>
//       <h1>POST 관리</h1>
//       <ul>
//         <li><a href="/api/posts/list">목록</a></li>
//         <li><a href="/api/posts/write">글쓰기</a></li>
//       </ul>
//     </div>`;
//   res.send(str);
//   res.end();
// });

router.get("/", postController.getPosts);

router.post("/", postController.createPost);

module.exports = router;
