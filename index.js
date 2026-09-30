import express from 'express';
import db from './db.js';


const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/tasks', (req, res) => {
  const { title, description, status } = req.body;
  const taskDescription = description ?? null; // Set description to null if not provided
  const taskStatus = status ?? 'todo'; // Default status to 'todo' if not provided

  const stmt = db.prepare('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)');
  const result = stmt.run(title, taskDescription, taskStatus);

  const createdTask = db.prepare('SELECT * FROM tasks WHERE id = ?').get(result.lastInsertRowid)
  
  res.status(201).json(createdTask);

})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

