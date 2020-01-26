const express = require('express');

const router = express.Router();
const Profile = require('../../models/Profile');

router.get('/me', async (req, res) => {
	try {
		const profile = await Profile.findOne({user: req.session.user._id})
		if (!profile) {
			return res.status(400).json({msg: 'no profile found'});
		}

		return res.json(profile);
	} catch (error) {
		res.status(400).json(error);
	}
});


module.exports = router;
