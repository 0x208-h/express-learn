const { db } = require("../util/db");
// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    res.send("get /");
  } catch (err) {
    next(err);
  }
};

//获取用户关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
  try {
    res.send("get /feed");
  } catch (err) {
    next(err);
  }
};

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    res.send("get /:slug");
  } catch (err) {
    next(err);
  }
};

//创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const data = req.body;
    // data.createTime = new Date();
    console.log(req.user[0].id, req.user, "users");
    const sql = "INSERT INTO articles SET ?";
    const ret = await db(sql, req.body);
    const users = await db("select * from users where id = ?", [
      req.user[0].id,
    ]);
    ret.author = users[0];
    // console.log(ret, users,"ret");
    // res.send("createArticle");
    res.status(201).json(ret);
  } catch (err) {
    next(err);
  }
};

//更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    res.send("updateArticle");
  } catch (err) {
    next(err);
  }
};

//删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    res.send("deleteArticle");
  } catch (err) {
    next(err);
  }
};
// 添加文章的评论
exports.addArticleComment = async (req, res, next) => {
  try {
    res.send("addArticleComment");
  } catch (err) {
    next(err);
  }
};

// 获取文章的评论
exports.getArticleComment = async (req, res, next) => {
  try {
    res.send("getArticleComment");
  } catch (err) {
    next(err);
  }
};

//删除评论
exports.deleteComment = async (req, res, next) => {
  try {
    res.send("deleteComment");
  } catch (err) {
    next(err);
  }
};

//最喜欢的文章
exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send("favoriteArticle");
  } catch (err) {
    next(err);
  }
};

//删除喜欢的文章
exports.deleteFavoriteArticle = async (req, res, next) => {
  try {
    res.send("unfavoriteArticle");
  } catch (err) {
    next(err);
  }
};
