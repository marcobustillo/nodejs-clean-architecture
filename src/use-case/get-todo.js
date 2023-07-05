const getTodo = ({ todoDb }) => {
  return async ({ _id }) => {
    const result = await todoDb({ _id });

    return result;
  };
};

module.exports = getTodo;
