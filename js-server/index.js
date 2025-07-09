const express = require('express');

const app = express();
const PORT = 8001;

// In-memory task storage (same initial tasks as Python server)
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Middleware to parse JSON
app.use(express.json());

// Basic middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Root endpoint - returns "Hello World" (migrated from Python server)
app.get('/', (req, res) => {
  res.json("Hello World");
});

// Health check endpoint (keeping existing functionality)
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// GET /tasks - Returns the task list (migrated from Python server)
app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

// POST /tasks - Adds a task to the task list (migrated from Python server)
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  // Validate that text is provided
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Task text is required and must be a string' });
  }
  
  // Add task to the list
  tasks.push(text);
  
  res.json({ message: 'Task added successfully' });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`✅ Access the server at: http://localhost:${PORT}`);
});

module.exports = app;
