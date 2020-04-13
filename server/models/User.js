const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  pseudo: { type: String, require: true },
  message: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);
