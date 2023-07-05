const updateTodo = ({ todoDb }) => {
  return async ({ _id, todoName, todoDescription }) => {
    return await todoDb({ _id, todoName, todoDescription });
  };
};

module.exports = updateTodo;
