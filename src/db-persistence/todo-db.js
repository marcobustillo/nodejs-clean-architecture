const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  _id: mongoose.Schema.Types.ObjectId,
  todoName: String,
  todoDescription: String,
});

const createTodo = async ({ _id, todoName, todoDescription }) => {
  const createdTodo = await Todo.create({ _id, todoName, todoDescription });

  return createdTodo;
};

const listTodo = async () => {
  const todoItems = await Todo.find().exec();

  return todoItems;
};

const getTodo = async ({ _id }) => {
  const todoItem = await Todo.findById({ _id }).exec();

  return todoItem;
};

const updateTodo = async ({ _id, todoName, todoDescription }) => {
  const newTodo = await Todo.findByIdAndUpdate(
    { _id },
    { todoName, todoDescription },
    { new: true }
  );

  return newTodo;
};

const deleteTodo = async ({ _id }) => {
  const deleted = await Todo.findByIdAndDelete({ _id });

  return deleted._id;
};

const todoDB = Object.freeze({
  createTodo,
  listTodo,
  getTodo,
  updateTodo,
  deleteTodo,
});

module.exports = todoDB;
