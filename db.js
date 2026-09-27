import Database from "better-sqlite3";

const dbPath = process.env.DATABASE_PATH || 'tasks.db'; // Use environment variable or default to 'tasks.db'
const db = new Database(dbPath); // Create a new SQLite database file named 'tasks.db'

// Create a table named 'tasks' if it doesn't already exist

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'todo' CHECK(status IN ('todo', 'doing', 'done')),
    createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;