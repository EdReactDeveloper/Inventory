const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.post(
	'/register',
	[
		check('email', 'you should type a valid email address').isEmail(),
		check('password', 'you should make a password of min 6 chars').isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ errors: [ { msg: 'user with this email already exists' } ] });
			}
			const salt = await bcrypt.genSalt(10);
			const cryptedPassword = await bcrypt.hash(password, salt);
			user = new User({
				email,
				password: cryptedPassword,
				boards: []
			});

			await user.save();
			return res.json(user);
		} catch (error) {
			res.status(400).json(error);
		}
		return res.json(req.body);
	}
);

router.post(
	'/login',
	[
		check('email', 'enter a valid email').isEmail(),
		check('password', 'enter a valid password of min 6 chars').isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			const user = await User.findOne({ email });
			if (!user) {
				return res.status(404).json({ errors: [ { msg: 'wrong email' } ] });
			}
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				return res.status(400).json({ errors: [ { msg: 'wrong password' } ] });
			}

			req.session.user = user;
			req.session.isLoggedIn = true;
			await req.session.save();

			return res.json(user);
		} catch (error) {
			res.status(400).json(error);
		}
	}
);

router.post('/logout', (req, res,) => {
	req.session.destroy(() => {
		return res.redirect('/');
	});
});

module.exports = router;
