const express = require('express');
const {body} = require('express-validator');
const controllers = require(`${process.cwd()}/controllers`);
const middlewares = require(`${process.cwd()}/middlewares`);

const router = new express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome to Manabie Assignment');
});

router.get('/users', controllers('UserController', 'index'));
router.post('/user', controllers('UserController', 'store'));
router.get('/user/:id', controllers('UserController', 'show'));
router.put('/user/:id', controllers('UserController', 'update'));

router.get('/tasks', controllers('TaskController', 'index'));
router.post('/task', controllers('TaskController', 'store'));
router.get('/task/:id', controllers('TaskController', 'show'));
router.put('/task/:id', controllers('TaskController', 'update'));

module.exports = router;
