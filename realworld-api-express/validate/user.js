const { body } = require("express-validator");
const { db } = require("../util/db");
const validate = require("../middleware/validate");
const md5 = require("../util/md5");

exports.register = validate([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (value, { req }) => {
      console.log(value, "value", req.body);
      const user = await db("select * from users where username = ?", [value]);
      console.log(user, "user");
      if (user.length > 0) {
        return Promise.reject("用户名已经存在 ");
      }
    }),
]);

exports.login = [
  validate([
    body("email").notEmpty().withMessage("邮箱不能为空"),
    body("password").notEmpty().withMessage("密码不能为空"),
  ]),
  validate([
    body("email").custom(async (value, { req }) => {
      const ret = await db("select * from users where email = ?", [value]);
      console.log(ret, "email", value);
      if (ret.length === 0) {
        return Promise.reject("用户不存在");
      }
      req.user = ret[0];
    }),
  ]),
  validate([
    body("password").custom(async (value, { req }) => {
      if (md5(value) !== req.user.password) {
        return Promise.reject("密码错误");
      }
    }),
  ])
];
