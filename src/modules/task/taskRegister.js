const Task = require('./Model');

function taskRegister(req, res) {
  const user = new Task({
    value: req.body.value,
    line: req.body.line,
  });

  user
    .save()
    .then(() => {
      res.status(200).json('Task added')
    })
    .catch((err) => {
      res.status(400).json(err)
    })
    .finally(() => {
      console.log('GOT IT');
    });
}

module.exports = taskRegister;