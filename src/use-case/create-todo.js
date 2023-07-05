const makeTodo = require("../entities");

const createTodo = ({ todoDb }) => {
  return async ({ todoName, todoDescription }) => {
    try {
      const todo = makeTodo({ todoName, todoDescription });

      const result = await todoDb({
        _id: todo.getId(),
        todoName: todo.getTodoName(),
        todoDescription: todo.getTodoDescription(),
      });

      return result;
    } catch (err) {
      throw err;
    }
  };
};

module.exports = createTodo;
