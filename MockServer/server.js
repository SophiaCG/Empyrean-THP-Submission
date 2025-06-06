const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;

// Load .env file
dotenv.config();

// Chaos mode is ON by default unless explicitly turned off
const chaosMode = process.env.CHAOS !== 'off';

app.use(cors());
app.use(express.json());

const items = require('./data/items.json');
const users = require('./data/users.json');
const comments = require('./data/comments.json');

// Mock auth middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === 'Bearer fake-jwt-token') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Chaos middleware: can trigger delay, error, or both
const chaosMiddleware = (req, res, next) => {
  if (!chaosMode) return next();

  const errorChance = 0.15;
  const delayChance = 0.3;
  const maxDelay = 2500;

  const triggerError = Math.random() < errorChance;
  const triggerDelay = Math.random() < delayChance;

  if (triggerError && triggerDelay) {
    const delay = Math.floor(Math.random() * maxDelay) + 500;
    console.log(`💥 Simulated error + delay (${delay}ms) for ${req.method} ${req.path}`);
    setTimeout(() => {
      res.status(500).json({ error: 'Simulated server error after delay. Please try again.' });
    }, delay);
    return;
  }

  if (triggerError) {
    console.log(`💥 Simulated error for ${req.method} ${req.path}`);
    return res.status(500).json({ error: 'Simulated server error. Please try again.' });
  }

  if (triggerDelay) {
    const delay = Math.floor(Math.random() * maxDelay) + 500;
    console.log(`⏳ Delaying ${req.method} ${req.path} by ${delay}ms`);
    return setTimeout(next, delay);
  }

  next();
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'password123') {
    res.json({ token: 'fake-jwt-token', user: { id: 1, name: 'Test User' } });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.use(chaosMiddleware);
app.use(authMiddleware);

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(p => p.id == req.params.id);
  if (item) res.json(item);
  else res.status(404).json({ error: 'Item not found' });
});

app.get('/items/:id/comments', (req, res) => {
  const postComments = comments[req.params.id];
  if (postComments) res.json(postComments);
  else res.json([]);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
});

app.listen(PORT, () => {
  console.log(`Mock API Server running at http://localhost:${PORT}`);
  if (chaosMode) {
    console.log(`🚨 Chaos mode is ON. Random delays and errors are possible. Set CHAOS=off in .env to disable it.`);
  } else {
    console.log(`🛡️ Chaos mode is OFF. Set CHAOS=on in .env to enable it.`);
  }
});
