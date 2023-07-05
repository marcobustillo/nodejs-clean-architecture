const deleteTodo = ({ todoDb }) => {
  return async ({ _id }) => {
    const result = await todoDb({ _id });
    return result;
  };
};

module.exports = deleteTodo;
