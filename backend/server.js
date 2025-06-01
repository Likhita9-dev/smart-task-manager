const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas URI
const MONGO_URI = 'mongodb+srv://taskuser:dgi5tszW_RpBbyb@likhitasmarttaskcluster.dgfrjpb.mongodb.net/?retryWrites=true&w=majority&appName=LikhitaSmartTaskCluster';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


