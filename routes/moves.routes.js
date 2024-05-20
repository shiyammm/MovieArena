import express from 'express';

const router = express.Router();

// C - Create movies
router.post('/', (req, res) => {
  res.send('Create movies');
});

// R = Read Movies
router.get('/', (req, res) => {
  res.send('Read movies');
});

// U - Update movies
router.put('/:id', (req, res) => {
  res.send('Update movies');
});

// D - Delete movies
router.delete('/:id', (req, res) => {
  res.send('Delete movies');
});

export default router;
