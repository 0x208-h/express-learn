const express = require("express");
const { body, validationResult } = require("express-validator");
const userCtrl = require("../controller/user");
const router = express.Router();
// 用户登录
router.post("/users/login", userCtrl.login);
// 用户注册
router.post(
  "/users",
  [body("username").notEmpty().withMessage("用户名不能为空")],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userCtrl.register
);

// 获取当前登录用户
router.get("/user", userCtrl.getCurrentUser);
// 更新当前登录用户
router.put("/user", userCtrl.updatecurrentUser);

module.exports = router;
