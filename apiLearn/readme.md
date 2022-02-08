# 学习 express

## express

安装
express express-generator
nodemon

express apiLearn

## 记录问题

mysql 升为 8.0 的版本后，加密规则变了

```js
Error: ZER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

登录数据库的客户端跟 mysql8.0 不兼容了，mysql8.0 密码认证采用了新的密码格式

原因 8.0mysql 引入了 caching_sha2_password 模块作为默认身份验证插件，nodejs 还没有跟进

解决办法，进入 mysql，
修改密码并指定加密规则为 mysql_native_password，输入

```shell
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '自己的密码';
FLUSH PRIVILEGES // 刷新
```

即更新 user 为 root，host 为 localhost 的密码为 自己的密码
