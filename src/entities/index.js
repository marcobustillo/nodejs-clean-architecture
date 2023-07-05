const Id = require("../id");

const buildTodo = require("./todo-entitity");

const makeTodo = buildTodo({ Id: Id });

module.exports = makeTodo;
