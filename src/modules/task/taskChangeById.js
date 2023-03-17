const Task = require('./Model');
function taskChangeById(req, res) {
  const userId = req.params.taskId;

  Task.findOneAndUpdate({_id: userId}, req.body)
    .then((resp) => {
      console.log(resp);
      res.status(200).json('Card is updated');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Task update error');
    });
}

module.exports = taskChangeById;