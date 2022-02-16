const express = require("express");

const router = express.Router();
const userCtrl = require("../controller/user");
const userValidate = require("../validate/user");
const auth = require("../middleware/token")
// 用户登录
router.post("/users/login", userValidate.login, userCtrl.login);
// 用户注册
router.post("/users", userValidate.register, userCtrl.register);

// 获取当前登录用户
router.get("/user", auth, userCtrl.getCurrentUser);
// 更新当前登录用户
router.put("/user", userCtrl.updatecurrentUser);

module.exports = router;
