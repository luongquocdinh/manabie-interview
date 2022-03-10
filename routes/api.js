const express = require('express');
const {body} = require('express-validator/check');
const controllers = require(`${process.cwd()}/controllers`);
const middlewares = require(`${process.cwd()}/middlewares`);

const router = new express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome to Manabie Assignment');
});

router.get('/users', controllers('UserController', 'index'));

module.exports = router;
