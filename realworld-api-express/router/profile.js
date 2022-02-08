const express = require("express");
const profileCtrl = require("../controller/profile");
const router = express.Router();

//获取用户资料
router.get("/:username", profileCtrl.getProfiles);

//关注用户
router.post("/:username/follow", profileCtrl.followProfiles);

//取消关注用户
router.delete("/:username/follow", profileCtrl.deleteFollowProfiles);

module.exports = router;
