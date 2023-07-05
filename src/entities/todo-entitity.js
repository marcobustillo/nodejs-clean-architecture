const buildTodo = ({ Id }) => {
  return function addTodo({ todoName, todoDescription } = {}) {
    if (todoName.length < 1) {
      throw new Error("Invalid todo name");
    }

    return Object.freeze({
      getId: () => Id,
      getTodoName: () => todoName,
      getTodoDescription: () => todoDescription,
    });
  };
};

module.exports = buildTodo;
