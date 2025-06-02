import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', category: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_BASE);
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleAdd = async () => {
    const { title, description, category } = form;

    if (!title || !description || !category) {
      return alert('All fields are required: title, description, and category.');
    }

    try {
      await axios.post(API_BASE, { title, description, category });
      setForm({ title: '', description: '', category: '' }); // clear form
      fetchTasks(); // refresh list
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 Likhita's: Smart Task Manager 🧠✔️</h2>

      <div className="card p-4 mb-4">
        <h5 className="mb-3">Add New Task</h5>
        <input
          className="form-control mb-2"
          placeholder="Task Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Task Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Task Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add Task</button>
      </div>

      <h5 className="mb-3">📋 Your Tasks</h5>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{task.title}</strong>
                <br />
                <span>{task.description || 'No description'}</span>
                <br />
                <small className="text-muted">Category: {task.category || 'Not assigned'}</small>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;











