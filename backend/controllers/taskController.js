const Task = require('../models/Task');
const axios = require('axios');

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new task with ML-predicted category
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }

  let category = "Uncategorized";

  try {
    const response = await axios.post('http://localhost:5001/predict', {
      text: `${title} ${description}`
    });
    category = response.data.category;
  } catch (err) {
    console.error('ML API error:', err.message);
  }

  try {
    const newTask = new Task({ title, description, category });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


