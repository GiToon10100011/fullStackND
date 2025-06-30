// models/dbPool.js
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USERNAME || "ezen",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "edudb",
  connectionLimit: 10,
  waitForConnections: true,
});
module.exports = pool;
