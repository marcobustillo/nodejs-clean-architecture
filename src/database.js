const mongoose = require("mongoose");

module.exports = (connString) => {
  return mongoose.connect(connString);
};
