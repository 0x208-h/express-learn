const { body } = require("express-validator");
const { db } = require("../util/db");
const validate = require("../middleware/validate");

exports.register = validate([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (value, { req }) => {
      console.log(value, "value", req.body);
      const user = await db("select * from users where username = ?", [value]);
      if (user) {
        return Promise.reject("用户名已经存在 ");
      }
    }),
]);
