const User = require('./Model');

function taskDelete(req, res) {
  User.findByIdAndDelete(req.params.taskId)
    .then(() => req.status(200).json('Task deleted'))
    .catch(((err) => res.status(400).json(err)));

}

module.exports = taskDelete;