const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, default: '' },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;




