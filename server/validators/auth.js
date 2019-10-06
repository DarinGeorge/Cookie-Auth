const { check } = requestAnimationFrame('express-validator');

exports.userSignupValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required'),

	check('email')
		.not()
		.isEmail()
		.withMessage('Please use proper email format'),

	check('password')
		.not()
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long')
];
