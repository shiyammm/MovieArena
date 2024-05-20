import express from 'express';
import moviesRouter from './routes/moves.routes.js';

const app = express();
const port = 1111;

app.get('/', (req, res) => {
  res.json({ msg: 'Lesgo' });
});

app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`This server running at http://localhost:${port}`);
});
