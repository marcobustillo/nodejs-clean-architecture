const createTodo = require("./create-todo");
const getTodo = require("./get-todo");
const listTodo = require("./list-todo");
const updateTodo = require("./update-todo");
const deleteTodo = require("./delete-todo");
const todoDb = require("../db-persistence/todo-db");

// Class instansation equivalent in functional programming
const createTodoItem = createTodo({ todoDb: todoDb.createTodo });
const getTodoItem = getTodo({ todoDb: todoDb.getTodo });
const getTodoList = listTodo({ todoDb: todoDb.listTodo });
const updateTodoItem = updateTodo({ todoDb: todoDb.updateTodo });
const deleteTodoItem = deleteTodo({ todoDb: todoDb.deleteTodo });

const todoService = Object.freeze({
  createTodoItem,
  getTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem,
});

module.exports = todoService;
