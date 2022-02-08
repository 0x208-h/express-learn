const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router")
const errorHandler = require("./middleware/errorHandler")
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/api', router)

//统一处理错误中间件
app.use(errorHandler())

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`listening on port  ${PORT}`);
});
