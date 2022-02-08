const dbconfig = require("../util/dbconfig");
// 模拟发送验证码

// 存储手机及验证码
const validatePhoneCode = [];
// 生成验证码
function rand(min, max) {
  return ((Math.random() * (max - min)) | 0) + min;
}
// 判断该手机是否已经发送了验证码
function sendCodePhone(phone) {
  for (let item of validatePhoneCode) {
    if (item.phone === phone) {
      return true;
    }
  }
  return false;
}

function findCodeAndPhone(phone, code) {
  console.log('findCodeAndPhone', phone, code, validatePhoneCode);
  for (const item of validatePhoneCode) {
    if (item.phone == phone && item.code == code) {
      return true;
    }
  }
  return false;
}
// 发送验证码
const sendCode = (req, res) => {
  const phone = req.query.phone;
  console.log(req.body, req.query, req.params, "body query params");
  const code = rand(1000, 9999);
  if (sendCodePhone(phone)) {
    return res.send({
      code: 400,
      msg: "验证码已发送，请稍后",
    });
  }
  console.log(phone,'phone')
  validatePhoneCode.push({
    phone,
    code,
  });
  console.log(validatePhoneCode, "validatePhoneCode");
  // validatePhoneCode = [];
  res.send({
    code: 200,
    message: "发送成功",
  });
  console.log(code, "code", phone);
};
// 验证码登录
const codePhoneLogin = (req, res) => {
  const { phone, code } = req.query;
  console.log(phone, "code", code);
  if (sendCodePhone(phone)) {
    console.log(findCodeAndPhone(phone, code), 'phoneLogin')
    if (findCodeAndPhone(phone, code)) {
      return res.send({
        code: 200,
        msg: "登陆成功",
      });
    } else {
      return res.send({
        code: 200,
        msg: "登陆失败",
      });
    }
  } else {
    return res.send({
      code: 200,
      msg: "验证码未发送",
    });
  }
};
module.exports = {
  sendCode,
  codePhoneLogin,
};
