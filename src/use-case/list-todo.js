const listTodo = ({ todoDb }) => {
  return async () => {
    return await todoDb();
  };
};

module.exports = listTodo;
