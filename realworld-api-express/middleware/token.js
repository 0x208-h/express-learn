const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
const { db } = require("../util/db");
module.exports = async (req, res, next) => {
  let token = req.headers["authorization"];
  token = token ? token.split("Bearer ")[1] : null;
  if (!token) {
    return res.status(401).send("没有权限");
    // return res.status(401).end();
  }

  try {
    const decodedToken = await verify(token, jwtSecret);
    console.log(decodedToken, "decodedToken");
    req.user = await db("select * from users where id = ?", [
      decodedToken.userId,
    ]);
    // console.log(ret, "ret");
    next();
  } catch (err) {
    return res.status(401).send("没有权限");
    // res.status(401).end();
  }
};
