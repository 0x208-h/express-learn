const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(PORT, function () {
  console.log(`listening on port  ${PORT}`);
});
