const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller')

const { login, getUsers, signUp } = UserController;

router.get('/', getUsers)
router.post('/login', login);
router.post('/signup', signUp);

module.exports = router;