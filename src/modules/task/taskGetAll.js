const Task = require('./Model');

function taskGetAll(req, res) {
  Task
    .find()
    .exec()
    .then((resp) => {
      res.status(200).json(resp)
    })
    .catch((err) => {
      res.status(400).json(err)
    });

}

module.exports = taskGetAll;