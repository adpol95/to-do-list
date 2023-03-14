const mongoose =  require('mongoose');

const { Schema } = mongoose; // Деструктуризация
const userSchema = new Schema({
  value: {
    type: String,
    required: true,
    unique: true,
  },
  line: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('User', userSchema);
