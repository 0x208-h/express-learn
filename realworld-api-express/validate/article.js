const { body } = require("express-validator");
const { db } = require("../util/db");
const validate = require("../middleware/validate");

exports.createArticle = validate([
  body('title').notEmpty().withMessage('文章标题不能为空'),
  body('descroption').notEmpty().withMessage('文章摘要不能为空'),
  body('body').notEmpty().withMessage('文章内容不能为空'),
])