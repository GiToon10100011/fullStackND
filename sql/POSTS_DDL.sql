-- ===================================================================
-- MySQL Practice Script for members, posts, reply schema
-- Author: ChatGPT
-- Date: 2025-06-17
-- ===================================================================

-- -----------------------------
-- 1. Drop existing tables (if any)
-- -----------------------------
DROP TABLE IF EXISTS reply;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS members;

-- -----------------------------
-- 2. Create tables
-- -----------------------------

-- members table
CREATE TABLE members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  passwd VARCHAR(100) NOT NULL,
  role VARCHAR(20) DEFAULT 'USER',
  indate DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- posts table
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),  -- references members.email
  title VARCHAR(200) NOT NULL,
  content TEXT,
  attach VARCHAR(255),
  wdate DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name) REFERENCES members(email) ON DELETE CASCADE
);

-- reply table
CREATE TABLE reply (
  id INT AUTO_INCREMENT PRIMARY KEY,
  post_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,  -- references members.email
  content TEXT,
  wdate DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (name) REFERENCES members(email) ON DELETE CASCADE
);
