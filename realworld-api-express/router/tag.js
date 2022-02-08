const express = require("express");
const tagsCtrl = require("../controller/tag");
const router = express.Router();

// 获取标签列表
router.get("/", tagsCtrl.getTags);
module.exports = router;
