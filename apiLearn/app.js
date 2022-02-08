var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const BodyParser = require("body-parser")

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源
app.use(express.static(path.join(__dirname, "public")));

// post请求
app.use(BodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

server.listen(3000);
