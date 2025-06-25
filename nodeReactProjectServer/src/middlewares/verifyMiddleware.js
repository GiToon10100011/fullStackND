const jwt = require("jsonwebtoken");

exports.accessToken = (req, res, next) => {
  const accessToken = req.headers["authorization"]?.split(" ")[1]; // Authorization 헤더에서 Bearer 토큰 추출
  if (!accessToken) {
    return res.status(401).json({ error: "Access token is required." });
  }

  // 토큰 검증 로직 (예: JWT 검증)
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Invalid access token:", err.message);
    return res.status(403).json({ error: "Invalid access token." });
  }
};

exports.adminAccess = (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: "Unauthorized access." });
  }

  // 관리자 권한 확인
  if (user.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden: Admin access required." });
  }

  next();
};
