const express = require('express');
const router = express.Router();
const { signup, login, logout, requireLogin } = require('../controllers/auth');

//validators
const { runValidation } = require('../validators');
const {
	userSignupValidator,
	userLoginValidator
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/login', userLoginValidator, runValidation, login);
router.get('/logout', logout);

// Testing protected routes -- UPDATE: it works, will use for admin.
router.get('/secret', requireLogin, (req, res) => {
	res.json({
		message: 'you have access to secret page'
	});
});

module.exports = router;
