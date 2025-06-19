const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const str = `
    <div><a href="/api/posts">POST 관리</a><a href="/api/users">USER 관리</a></div>`;
  res.send(str);
  res.end();
});

module.exports = router;
