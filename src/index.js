const express = require('express');

const db = require('./models')

const authControllers = require('./controllers/auth');

const app = express();

app.use('/auth', authControllers);

app.get('/', (req, res) => {
  return res.json('API running...')
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Listening on port 3001...');
  });
});