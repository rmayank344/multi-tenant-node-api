const express = require('express');
const router = new express.Router();

const {user_signup} = require('../controller/user_signup');

//user signup routes
router.post('/signup', user_signup);

module.exports = router;