const pool = require("../models/dbPool");

exports.getUsers = async (req, res) => {
  const query =
    "SELECT id, name, email, role, date_format(created_at, '%Y-%m-%d, %H시 %i분 %s초') createdAt FROM members ORDER BY id DESC";
  try {
    const [rows] = await pool.query(query);
    if (rows.length > 0) {
      res.status(200).json({
        status: "success",
        message: "사용자 목록을 성공적으로 가져왔습니다.",
        data: rows,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "사용자가 없습니다.",
      });
    }
  } catch (error) {
    console.error("사용자 목록 조회 중 오류 발생:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
};
