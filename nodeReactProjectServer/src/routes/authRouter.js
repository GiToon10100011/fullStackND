const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyMiddleware = require("../middlewares/verifyMiddleware");

router.get("/user", verifyMiddleware.accessToken, authController.getUser);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh", authController.verifyRefreshToken);

module.exports = router;
