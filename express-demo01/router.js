const express = require("express");

const router = express.Router();
const { getDb, saveDb } = require("./db");

// 查询
router.get("/", async (req, res, next) => {
  try {
    const db = await getDb();
    res.status(200).send({ data: db.todos });
  } catch (err) {    
    // next() 往后匹配下一个中间件
    // next('route') 往后匹配当前中间件堆栈中下一个
    // 如果您向next()函数传递任何内容（字符串除外'route'），Express 会将当前请求视为错误，并将跳过任何剩余的非错误处理路由和中间件函数。
    next(err); // 跳过所有剩余的无错误处理路由的中间件函数
    // res.status(500).json({ msg: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const db = await getDb();
    const todo = db.todos.find(
      (item) => item.id === Number.parseInt(req.params.id)
    );
    if (!todo) return res.status(404).send();
    res.status(200).json({ data: todo });
  } catch (err) {
    // res.status(500).json({ msg: err.message });
    next(err);
  }
});
// 增加
router.post("/", async (req, res) => {
  try {
    const todo = req.body;
    console.log(req.body, "body");
    if (!todo.title) {
      return res.status(422).json({ err: "The title is required" });
    }
    const db = await getDb();
    const lastIndex = db.todos[db.todos.length - 1].id;
    todo.id = lastIndex ? lastIndex + 1 : 1;
    db.todos.push(todo);
    await saveDb(db);
    res.status(201).send(todo);
  } catch (err) {
    // res.status(500).json({ msg: err.message });
    next(err);
  }
});

//修改
router.patch("/:id", async (req, res) => {
  try {
    // 获取表单数据
    const data = req.body;
    console.log(data, "data");
    // 查找需要修改的数据
    const id = req.params.id;

    const db = await getDb();
    const ret = db.todos.find((item) => item.id === Number.parseInt(id));
    if (!ret) {
      return res.status(400).end();
    }
    Object.assign(ret, data);
    await saveDb(db);
    res.status(200).send({ ret });
  } catch (err) {
    // res.status(500).json({ err: err.message });
    next(err);
  }
});

//删除
router.delete("/:id", async (req, res) => {
  console.log(req.params.id, "id");
  try {
    const db = await getDb();
    const index = db.todos.findIndex(
      (item) => item.id === Number.parseInt(req.params.id)
    );
    if (index === -1) {
      return res.status(404).end();
    }
    db.todos.splice(index, 1);
    await saveDb(db);
    res.status(204).send();
  } catch (err) {
    // res.status(500).json({ err: err.message });
    next(err);
  }
});

module.exports = router;
