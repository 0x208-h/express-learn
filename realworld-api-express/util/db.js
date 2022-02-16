const mysql = require("mysql");

// module.exports = {
//   config: {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'hch08124512',
//     database: 'realWorld',
//   },
//   sqlConnect: function(sql, sqlArr, callback) {
//     const pool = mysql.createPool(this.config)
//     pool.getConnection((err, conn) => {
//       if(err) {
//         console.log(err, '连接失败')
//         return
//       }
//       console.log('数据库连接成功')
//       conn.query(sql, sqlArr, callback)
//       conn.release()
//     })
//   }
// }

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "hch08124512",
  database: "realworld",
};
// []  {} [{} ,id]
exports.db = (sql, sqlParams) => {
  // sqlParams = sqlParams || [];
  return new Promise((resolve, reject) => {
    const pool = mysql.createPool(config);
    pool.getConnection((err, conn) => {
      if (!err) {
        // conn.query(sql, sqlParams, (error, results) => {
        //   if (!error) {
        //     console.log(results, "results");
        //     resolve(results);
        //     conn.destroy();
        //   } else {
        //     console.log("sql", error);
        //     reject(error);
        //   }
        // });
        conn.query(sql, sqlParams, (error, results) => {
          if (!error) {
            // console.log(results, "results");
            resolve(results);
          } else {
            console.log("error", error);
            reject(error);
          }
        });
      } else {
        console.log("err", err);
        reject(err);
      }
    });
  });
};
