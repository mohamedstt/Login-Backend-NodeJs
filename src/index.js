const express = require('express');
const cors = require('cors')
const db = require('./models');
const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt')

const authControllers = require('./controllers/auth');
const linkControllers = require('./controllers/link');

const app = express();

app.use(cors();)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(response);
app.use(checkJwt);

app.use('/auth', authControllers);
app.use('/link', linkControllers);

app.get('/', (req, res) => {
  return res.json('API running...')
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Listening on port 3001...');
  });
});