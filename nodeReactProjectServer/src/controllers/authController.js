const pool = require("../models/dbPool");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (user, secret, expiresIn) => {
  return jwt.sign(user, secret, { expiresIn });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "이메일과 비밀번호를 입력해주세요." });
  }

  try {
    const userQuery =
      "SELECT id, name, email, password, role FROM members WHERE email = ?";
    const [users] = await pool.query(userQuery, [email]);

    if (users.length === 0) {
      return res
        .status(401)
        .json({ result: "fail", message: "사용자를 찾을 수 없습니다." });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ result: "fail", message: "비밀번호가 일치하지 않습니다." });
    }

    const { password: _, ...userPayload } = user; // 비밀번호 제외

    const accessToken = generateToken(
      userPayload,
      process.env.JWT_ACCESS_SECRET,
      "15m"
    );
    const refreshToken = generateToken(
      userPayload,
      process.env.JWT_REFRESH_SECRET,
      "1d"
    );

    //members 테이블에 refreshToken 저장
    const updateQuery = "UPDATE members SET refresh_token = ? WHERE id = ?";
    const [result] = await pool.query(updateQuery, [refreshToken, user.id]);

    if (result.affectedRows === 0) {
      return res
        .status(500)
        .json({ result: "fail", message: "리프레시 토큰 저장 실패" });
    }
    // 로그인 성공 시 사용자 정보와 토큰 반환

    res.status(200).json({
      result: "success",
      message: "로그인에 성공했습니다.",
      data: { ...userPayload, accessToken, refreshToken },
    });
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    res
      .status(500)
      .json({ result: "fail", message: "서버 오류가 발생했습니다." });
  }
};

exports.logout = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "유효하지 않은 사용자입니다." });
  }
  try {
    // 로그아웃 로직은 보통 리프레시 토큰을 블랙리스트에 추가하거나
    // 데이터베이스에서 해당 토큰을 삭제하는 방식으로 구현됩니다.
    // 여기서는 간단히 성공 응답을 반환합니다.
    const sql = "update members set refresh_token = null where email = ?";
    const [result] = await pool.query(sql, [email]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ result: "fail", message: "사용자를 찾을 수 없습니다." });
    }

    res.status(200).json({ result: "success", message: "로그아웃 성공" });
  } catch (error) {
    console.error("로그아웃 중 오류 발생:", error);
    res
      .status(500)
      .json({ result: "fail", message: "서버 오류가 발생했습니다." });
  }
};

exports.getUser = async (req, res) => {
  const user = req.user;
  if (!user) {
    console.error("인증되지 않은 사용자입니다.");
    return res.status(400).json({ error: "인증되지 않은 사용자입니다." });
  }
  try {
    const query = "SELECT id, name, email, role FROM members WHERE email = ?";
    const [rows] = await pool.query(query, [user.email]);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ result: "fail", message: "사용자를 찾을 수 없습니다." });
    }
    const userInfo = rows[0];
    const { password, ...userDetails } = userInfo; // 비밀번호 제외
    res.status(200).json({
      result: "success",
      message: "사용자 정보를 성공적으로 가져왔습니다.",
      data: userDetails,
    });
  } catch (error) {
    console.error("사용자 정보 조회 중 오류 발생:", error);
    res
      .status(500)
      .json({ result: "fail", message: "서버 오류가 발생했습니다." });
  }
};

exports.verifyRefreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res
      .status(400)
      .json({ result: "fail", message: "리프레시 토큰을 입력해주세요." });
  }

  try {
    // const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    // const user = await User.findById(decoded.userId);
    // if (!user) {
    //   return res.status(401).json({ error: "사용자를 찾을 수 없습니다." });
    // }
    // const newAccessToken = jwt.sign(
    //   { userId: user._id },
    //   process.env.JWT_ACCESS_SECRET,
    //   {
    //     expiresIn: "1h",
    //   }
    // );
    // res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error("리프레시 토큰 검증 중 오류 발생:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
};
