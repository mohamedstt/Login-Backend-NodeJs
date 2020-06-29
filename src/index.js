const express = require('express');

const authControllers = require('./controllers/auth');

const app = express();

app.use('/auth', authControllers);

app.get('/', (req,res) => {
  return res.json('API running...')
});

app.listen(3001, () => {
  console.log('Listening on port 3001...');
});