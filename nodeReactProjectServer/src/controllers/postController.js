const pool = require("../models/dbPool");

//CRUD 로직
exports.createPost = async (req, res) => {
  const { author, title, content } = req.body;
  if (!author || !title || !content) {
    return res.status(400).json({
      error: "Bad Request",
      message: "유효하지 않은 요청입니다.",
    });
  }

  try {
    // const sql = "INSERT INTO posts (author, title, content) VALUES (?, ?, ?)";
    const sql = "INSERT INTO posts set ?";
    const postData = { author, title, content };
    const [result] = await pool.query(sql, postData);
    return res.status(201).json({ status: "success", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const countQuery = "select count(id) as count from posts";
    const [[{ count }]] = await pool.query(countQuery);
    const postQuery = "SELECT * FROM posts ORDER BY id DESC";
    const [posts] = await pool.query(postQuery);
    return res.status(200).json({ status: "success", count, posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};
