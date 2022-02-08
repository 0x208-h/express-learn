const mysql = require('mysql');
module.exports = {
  // 数据库配置
  config: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'hch08124512',
    database: 'apitest',
  },
  sqlConnect: function(sql, sqlArr, callback) {
    var pool = mysql.createPool(this.config)
    pool.getConnection((err, conn) => {
      console.log('12345')
      if(err) {
        console.log(err, '连接失败')
        return
      }
      conn.query(sql, sqlArr, callback)
      conn.release()
    })
  }
}