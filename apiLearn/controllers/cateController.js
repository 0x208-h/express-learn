const dbconfig = require("../util/dbconfig");
// 获取分类

const getCate = (req, res, next) => {
  const sql = "select * from cate";
  const sqlArr = [];
  const callback = function (err, data) {
    if (err) {
      console.log(err, "连接出错");
    } else {
      res.send({
        list: data,
      });
    }
  };
  dbconfig.sqlConnect(sql, sqlArr, callback);
};

const getCatePost = (req, res, next) => {
  console.log(req.query, res.params, res.body, "req");
  let { id } = req.query;
  const sql = "select * from post where cate_id = ?";
  const sqlArr = [id];
  const callback = function (err, data) {
    if (err) {
      console.log(err, "连接错误");
    } else {
      res.send({
        list: data,
      });
    }
  };
  dbconfig.sqlConnect(sql, sqlArr, callback);
};

module.exports = {
  getCate,
  getCatePost,
};
