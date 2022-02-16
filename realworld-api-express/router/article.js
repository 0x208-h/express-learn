const express = require("express");
const articleCtrl = require("../controller/article");
const token = require("../middleware/token")
const router = express.Router();

//获取文章列表
router.get("/", articleCtrl.getArticles);

// 获取用户关注的作者文章列表
router.get("/feed", articleCtrl.getFeedArticles);

// 获取文章
router.get("/:slug", articleCtrl.getArticle);

//创建文章
router.post("/", token, articleCtrl.createArticle);

//更新文章
router.put("/:slug", articleCtrl.updateArticle);
// 删除文章
router.delete("/:slug", articleCtrl.deleteArticle);

//添加文章的评论
router.post("/:slug/comments", articleCtrl.addArticleComment);

//获取文章的评论
router.get("/:slug/comments", articleCtrl.getArticleComment);

//删除评论
router.delete("/:slug/comments/:id", articleCtrl.deleteComment);

// 喜欢的文章
router.post("/:slug/favorite", articleCtrl.favoriteArticle);

// 删除喜欢的文章
router.delete("/:slug/favorite", articleCtrl.deleteFavoriteArticle);

module.exports = router;
