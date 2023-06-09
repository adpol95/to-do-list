const mongoose =  require('mongoose');

const { Schema } = mongoose; // Деструктуризация
const userSchema = new Schema({
  value: {
    type: String,
    required: true,
    unique: true,
  },
  line: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model('Task', userSchema);
