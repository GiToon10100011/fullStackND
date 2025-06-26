const pool = require("../models/dbPool");
const path = require("path");
const fs = require("fs");
//CRUD 로직
exports.createPost = async (req, res) => {
  const { author, title, content } = req.body;
  const file = req.file;
  if (!author || !title || !content) {
    return res.status(400).json({
      error: "Bad Request",
      message: "유효하지 않은 요청입니다.",
    });
  }

  try {
    // const sql = "INSERT INTO posts (author, title, content) VALUES (?, ?, ?)";
    const sql = "INSERT INTO posts set ?";
    const postData = { author, title, content, attach: file?.filename || null };
    const [result] = await pool.query(sql, postData);
    return res.status(201).json({ status: "success", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const page = Number(req?.query?.page);
    const size = 3;
    const countQuery = "select count(id) as count from posts";
    const [[{ count }]] = await pool.query(countQuery);
    const totalPages = Math.ceil(count / size);
    const postQuery =
      "SELECT id, title, content, author, attach file, date_format(created_at, '%Y-%m-%d') as created_at FROM posts ORDER BY id DESC LIMIT ? OFFSET ?";
    const [posts] = await pool.query(postQuery, [size, (page - 1) * size]);
    console.log(posts);
    return res
      .status(200)
      .json({ status: "success", size, count, posts, totalPages, page });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Bad Request",
      message: "유효하지 않은 요청입니다.",
    });
  }

  try {
    const sql =
      "SELECT id, title, content, author, attach file, date_format(created_at, '%Y-%m-%d') as created_at FROM posts WHERE id = ?";
    const [post] = await pool.query(sql, [id]);
    if (!post.length) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "게시글을 찾을 수 없습니다." });
    }
    return res.status(200).json({ status: "success", post: post[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Bad Request",
      message: "유효하지 않은 요청입니다.",
    });
  }

  try {
    const fileQuery = "SELECT attach FROM posts WHERE id = ?";
    const [[post]] = await pool.query(fileQuery, [id]);
    if (!post) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "게시글을 찾을 수 없습니다." });
    }
    const sql = "DELETE FROM posts WHERE id = ?";
    const [result] = await pool.query(sql, [id]);

    let filePath = "";

    if (post.attach) {
      filePath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "uploads",
        post.attach
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // 동기 방식으로 파일을 삭제하는 함수 비동기방식은 fs.unlink()
      }
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "게시글을 찾을 수 없습니다." });
    }
    return res
      .status(200)
      .json({ status: "success", message: "게시글이 삭제되었습니다." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};

//일정 주기마다 더미데이터 혹시라도 있는지 검사하는 로직도 있어야겠는데

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      error: "Bad Request",
      message: "유효하지 않은 요청입니다.",
    });
  }

  const { author, title, content } = req.body;
  const file = req.file;

  if (!author || !title || !content) {
    return res.status(400).json({
      error: "Bad Request",
      message: "유효하지 않은 요청입니다.",
    });
  }

  //기존 파일이 있는지 확인

  let filePath = "";

  const fileQuery = "SELECT attach FROM posts WHERE id = ?";
  const [[post]] = await pool.query(fileQuery, [id]);
  if (!post) {
    return res
      .status(404)
      .json({ error: "Not Found", message: "게시글을 찾을 수 없습니다." });
  }

  if (post.attach) {
    filePath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "uploads",
      post.attach
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  try {
    const sql = "UPDATE posts SET ? WHERE id = ?";
    const postData = { author, title, content, attach: file?.filename || null };
    const [result] = await pool.query(sql, [postData, id]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ error: "Not Found", message: "게시글을 찾을 수 없습니다." });
    }
    return res
      .status(200)
      .json({ status: "success", message: "게시글이 수정되었습니다." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "DB Error", message: error.message });
  }
};
