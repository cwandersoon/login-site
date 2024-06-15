import express from 'express';
import cors from 'cors';
import client from './database.js';

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://login-site-14vx.onrender.com']

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));
app.use(express.json());
app.use(express.static('dist')); 

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

app.get('/api', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM users');
    response.send(rows);
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await client.query(query, [email]);

    if (rows.length === 1) {
      if (rows[0].password === password) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const query = 'INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4)';
    const result = await client.query(query, [email, password, firstName, lastName]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/delete/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const query = 'DELETE FROM users WHERE email = $1';
    const result = await client.query(query, [email]);

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/profile/update', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const query = 'UPDATE users SET first_name = $1, last_name = $2, password = $3 WHERE email = $4';
    const result = await client.query(query, [firstName, lastName, password, email]);

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Profile updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/profile/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await client.query(query, [email]);

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
      const { rows } = await client.query('SELECT * FROM projects');
      res.json(rows);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/projects', async (req, res) => {
  const { title, description, status } = req.body;
  try {
      const result = await client.query(
          'INSERT INTO projects (title, description, status) VALUES ($1, $2, $3) RETURNING *',
          [title, description, status]
      );
      res.status(201).json(result.rows[0]);
      console.log(result.rows[0])
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
      const result = await client.query(
          'UPDATE projects SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
          [title, description, status, id]
      );
      if (result.rows.length) {
          res.json(result.rows[0]);
          console.log(result.rows[0])
      } else {
          res.status(404).json({ message: 'Project not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const result = await client.query(
          'DELETE FROM projects WHERE id = $1 RETURNING *',
          [id]
      );
      if (result.rows.length) {
          res.json({ message: 'Project deleted successfully' });
          console.log({ message: 'Project deleted successfully' })
      } else {
          res.status(404).json({ message: 'Project not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


