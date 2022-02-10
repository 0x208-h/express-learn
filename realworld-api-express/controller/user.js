const { db } = require("../util/db");

// 用户注册
exports.register = async function (req, res, next) {
  try {
    console.log(req.body, "body");
    const sql = "INSERT INTO users SET ?";
    const ret = await db(sql, req.body);
    console.log(ret, "res");
    res.send(ret);
  } catch (err) {
    next(err);
  }
};

// 用户登录
exports.login = async function (req, res, next) {
  try {
    res.send("post /user/login");
  } catch (err) {
    next(err);
  }
};
//获取当前登录用户
exports.getCurrentUser = async function (req, res, next) {
  try {
    // res.send("get user");
    const sql = "select * from users";
    const ret = await db(sql);
    console.log(ret, "res");
    res.send(ret);
  } catch (err) {
    next(err);
  }
};

//更新当前登录用户
exports.updatecurrentUser = async function (req, res, next) {
  try {
    res.send("put user");
  } catch (err) {
    next(err);
  }
};
