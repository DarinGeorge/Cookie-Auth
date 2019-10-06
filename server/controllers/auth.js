const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken'); //generate token
const expressJwt = require('express-jwt'); //check if token is valid

exports.signup = (req, res) => {
	User.findOne({ email: req.body.email }).exec((err, user) => {
		if (user) {
			return res.status(400).json({
				error: 'Email is taken.'
			});
		}

		const { name, email, password } = req.body;
		let username = shortId.generate();
		let profile = `${process.env.CLIENT_URL}/profile/${username}`;

		let newUser = new User({ name, email, password, profile, username });
		newUser.save((err, success) => {
			if (err) {
				return res.status(400).json({
					error: err
				});
			}
			res.json({
				//user: success
				message: 'Success! Registration complete. Please Login.'
			});
		});
	});
};

exports.login = (req, res) => {
	const { email, password } = req.body;
	// check if user exists
	User.findOne({ email }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User with that email does not exist. Are you signed up?'
			});
		}
		// authenticate user
		if (!user.authenticate(password)) {
			return res.status(400).json({
				error:
					'Email and password combination does not match our any of our records. Please try again.'
			});
		}
		// generate a json token and send to client
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
			expiresIn: '1d'
		});

		res.cookie('token', token, { expiresIn: '1d' }); //give token to cookie
		const { _id, username, name, email, role } = user;
		return res.json({
			token,
			user: { _id, username, name, email, role }
		});
	});
};

exports.logout = (req, res) => {
	res.clearCookie('token');
	res.json({
		message: 'Log out successful.'
	});
};

exports.requireLogin = expressJwt({
	secret: process.env.JWT_SECRET_KEY
});
