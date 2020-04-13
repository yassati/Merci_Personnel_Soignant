const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  pseudo: { type: String, require: true },
  message: { type: String, require: true }
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
