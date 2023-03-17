const mongoose = require('mongoose');

const url = 'mongodb+srv://adpol95:MlWkg1a2F5o8FtCX@cluster0.izr2wlk.mongodb.net/toDoList?retryWrites=true&w=majority';
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