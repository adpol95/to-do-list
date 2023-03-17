const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/ToDoList';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

function mongooseDB() {
  mongoose
    .connect(url, options)
    .then(() => console.log('Mongo connect OK'))
    .catch((err) => console.log(err))

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('CONNECTED');
  });
}

module.exports = mongooseDB;