const mongoose = require("mongoose");

const Id = Object.freeze({
  makeId: () => new mongoose.Types.ObjectId(),
});

module.exports = Id;
