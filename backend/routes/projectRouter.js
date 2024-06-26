import express from 'express';
import client from '../database.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { rows } = await client.query('SELECT * FROM projects');
        res.json(rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
  });
  
  router.post('/', async (req, res) => {
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
  
  router.put('/:projects_id', async (req, res) => {
    const { projects_id } = req.params;
    const { title, description, status } = req.body;
    try {
        const result = await client.query(
            'UPDATE projects SET title = $1, description = $2, status = $3 WHERE projects_id = $4 RETURNING *',
            [title, description, status, projects_id]
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
  
  router.delete('/:projects_id', async (req, res) => {
    const { projects_id } = req.params;
    try {
        const result = await client.query(
            'DELETE FROM projects WHERE projects_id = $1 RETURNING *',
            [projects_id]
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
  

  export default router;