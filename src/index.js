const express = require('express');
const authControllers = require('./controllers/auth');
const app = express();
const db = require('./models');
const response = require('./middlewares/response');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(response);

app.use('/auth', authControllers);

app.get('/', (req, res) => {
  return res.json('API running...')
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Listening on port 3001...');
  });
});