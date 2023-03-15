const User = require('./Model');

function taskGetAll(req, res) {
  User
    .find()
    .exec()
    .then((resp) => req.status(200).json(resp))
    .catch(((err) => res.status(400).json(err)));

}

module.exports = taskGetAll;