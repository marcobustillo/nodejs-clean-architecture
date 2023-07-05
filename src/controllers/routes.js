const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createTodoItem,
  getTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
} = require("../use-case");

const headers = {
  "Content-Type": "application/json",
};

router.get("/todo/:id", async (req, res) => {
  const result = await getTodoItem({ _id: req.params.id });

  res.set(headers);
  res.status(200).send(result);
});

router.get("/todos", async (req, res) => {
  const result = await getTodoList();
  res.send(result);
});

router.post("/todo", async (req, res) => {
  let { todoName, todoDescription } = req.body;

  const result = await createTodoItem({ todoName, todoDescription });

  res.send(result);
});

router.patch("/todo", async (req, res) => {
  const result = await updateTodoItem({ ...req.body });
  res.send(result);
});

router.delete("/todo/:id", async (req, res) => {
  const result = await deleteTodoItem({ _id: req.params.id });
  res.send(result);
});

module.exports = router;
