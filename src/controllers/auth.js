const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const {
  Account
} = require('../models');

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
  return res.json('Sign in');
});

router.get('/sign-up', async (req, res) => {
  const email = 'testeando@gmail.com'
  const password = '1345659'
  // const {email, password} = req.body;
  
  // const account = await Account.findOne({where:{email}})
  // if (account) return res.JSON('Account already exists');
  
  const hash = bcrypt.hashSync(password, saltRounds);
  const result = await Account.create({email,password: hash});
  
  return res.json(result) 
});

module.exports = router;