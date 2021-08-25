const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

router.post('/signUp', userController.SignUp);
router.post('/signIn', userController.signIn);

module.exports = router;
