const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/auth');

//validators
const { runValidation } = require('../validators');
const {
	userSignupValidator,
	userLoginValidator
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/login', userLoginValidator, runValidation, login);

module.exports = router;
