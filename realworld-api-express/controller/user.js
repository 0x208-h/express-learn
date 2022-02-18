const { db } = require("../util/db");
const md5 = require("../util/md5");
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
// 用户注册
exports.register = async function (req, res, next) {
  try {
    const data = {
      ...req.body,
      password: md5(req.body.password),
    };
    console.log(req.body, "body");
    const sql = "INSERT INTO users SET ?";
    const ret = await db(sql, data);
    console.log(ret, "res");
    res.status(201).send(req.body);
  } catch (err) {
    next(err);
  }
};

// 用户登录
exports.login = async function (req, res, next) {
  try {
    console.log(req.user, "req");
    const user = req.user;
    // 数据验证
    // 生成token
    const token = await jwt.sign(
      {
        userId: user.id,
      },
      jwtSecret,
      {
        expiresIn: 30,
      }
    );
    delete user.password;

    res.status(200).send({ ...user, token });
  } catch (err) {
    next(err);
  }
};
//获取当前登录用户
exports.getCurrentUser = async function (req, res, next) {
  try {
    // console.log(req.headers, 'headers')
    // res.send("get user");
    res.status(200).json({ user: req.user });
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
