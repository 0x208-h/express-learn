const express = require("express");
const fs = require("fs");

const router = require("./router");
const app = express();
// 解析表单请求体 application/json
app.use(express.json());
// 解析表单请求体 application/x-www-form-urlencoded
app.use(express.urlencoded());

app.use("/todos", router);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
// 错误处理中间件总是需要四个参数。您必须提供四个参数以将其标识为错误处理中间件函数。即使您不需要使用该next对象，您也必须指定它来维护签名。否则，该next对象将被解释为常规中间件并且无法处理错误。

app.use((err, req, res, next) => {
  res.status(404).json({ err: err.message });
});

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.path);
  console.log(req.method);
  res.send("Hello, world");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
