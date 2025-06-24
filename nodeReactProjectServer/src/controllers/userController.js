const pool = require("../models/dbPool");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "모든 필드를 입력해주세요." });
  }

  try {
    const query =
      "INSERT INTO members (name, email, password, role) VALUES (?, ?, ?, ?)";

    const saltRounds = 10; //2의 10제곱번만큼 반복된 해싱작업을 수행하기 위함
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.query(query, [
      name,
      email,
      hashedPassword,
      role,
    ]);

    if (result.affectedRows > 0) {
      res.status(201).json({
        result: "success",
        message: "사용자가 성공적으로 생성되었습니다.",
        data: { insertId: result.insertId },
      });
    } else {
      res.status(500).json({ error: "사용자 생성에 실패했습니다." });
    }
  } catch (error) {
    console.error("사용자 생성 중 오류 발생:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
};

exports.checkEmail = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "이메일을 입력해주세요." });
  }

  try {
    const query = "SELECT * FROM members WHERE email = ?";
    const [rows] = await pool.query(query, [email]);

    if (rows.length > 0) {
      res
        .status(200)
        .json({ isDuplicated: true, message: "이미 사용 중인 이메일입니다." });
    } else {
      res
        .status(200)
        .json({ isDuplicated: false, message: "사용 가능한 이메일입니다." });
    }
  } catch (error) {
    console.error("이메일 체크 중 오류 발생:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
};
