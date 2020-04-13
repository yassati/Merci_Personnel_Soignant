const User = require("../models/User");

exports.sendMessage = (req, res, next) => {
  delete req.body._id;
  const user = new User({
    email: req.body.email,
    pseudo: req.body.pseudo,
    message: req.body.message,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Message envoyé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getMessage = (req, res, next) => {
  User.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};
