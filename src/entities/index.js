const Id = require("../id");

const buildTodo = require("./todo-entitity");

const makeTodo = buildTodo({ Id: Id.makeId() });

module.exports = makeTodo;
