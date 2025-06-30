const pool = require("../models/dbPool");

exports.getActiveTimeDeals = async (req, res) => {
  try {
    await pool.query(`
      UPDATE time_deals
      SET is_active = FALSE
      WHERE end_time < NOW() AND is_active = TRUE
    `);

    const [rows] = await pool.query(`
      SELECT p.id, p.name, p.price, p.image_url, td.deal_price, td.start_time, td.end_time
      FROM products p
      JOIN time_deals td ON p.id = td.product_id
      WHERE td.start_time <= NOW()
        AND td.end_time >= NOW()
        AND td.is_active = TRUE
    `);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
};

exports.getAllTimeDeals = async (req, res) => {
  try {
    await pool.query(`
      UPDATE time_deals
      SET is_active = CASE
        WHEN start_time <= NOW() AND end_time > NOW() THEN TRUE
        WHEN end_time <= NOW() THEN FALSE
        ELSE is_active
      END
    `);

    const [rows] = await pool.query(`
      SELECT
        td.id,
        p.id AS product_id,
        p.name AS product_name,
        p.price,
        td.deal_price,
        td.start_time,
        td.end_time,
        td.is_active
      FROM time_deals td
      JOIN products p ON td.product_id = p.id
      ORDER BY td.is_active DESC, td.start_time DESC
    `);

    res.json(rows);
  } catch (err) {
    console.error("전체 타임딜 조회 실패:", err);
    res.status(500).json({ message: "서버 오류" });
  }
};

exports.createTimeDeal = async (req, res) => {
  const { product_id, deal_price, start_time, end_time } = req.body;

  if (!product_id || !deal_price || !start_time || !end_time) {
    return res.status(400).json({ message: "필수 항목 누락" });
  }

  if (new Date(start_time) >= new Date(end_time)) {
    return res
      .status(400)
      .json({ message: "종료 시간이 시작 시간보다 빨라야 합니다." });
  }

  try {
    const [result] = await pool.query(
      `
      INSERT INTO time_deals (product_id, deal_price, start_time, end_time)
      VALUES (?, ?, ?, ?)
    `,
      [product_id, deal_price, start_time, end_time]
    );

    res
      .status(201)
      .json({ message: "타임딜 등록 성공", time_deal_id: result.insertId });
  } catch (err) {
    console.error("등록 오류:", err);
    res.status(500).json({ message: "서버 오류" });
  }
};

exports.updateTimeDeal = async (req, res) => {
  const { id } = req.params;
  const { deal_price, start_time, end_time } = req.body;

  try {
    await pool.query(
      `
      UPDATE time_deals
      SET deal_price = ?, start_time = ?, end_time = ?
      WHERE id = ?
    `,
      [deal_price, start_time, end_time, id]
    );

    res.json({ message: "수정 성공" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
};

exports.deleteTimeDeal = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(`DELETE FROM time_deals WHERE id = ?`, [id]);
    res.json({ message: "삭제 성공" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 오류" });
  }
};
