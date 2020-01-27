const express = require('express');
const {check, validationResult} = require('express-validator')

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
		res.status(400).json({msg: error});
	}
});

router.post('/:id', [
	check('name', 'min length is 3 chars, max length is 25 chars').isLength({min: 3, max: 25})
], async(req, res)=>{
	const errors = validationResult(req)
	if(!errors.isEmpty()){
		res.status(400).json({errors: errors.array()})
	}
	const payload = req.body

	try {
		let profile = await Profile.findOne({user: req.session.user._id})
		if(profile){
			profile = await Profile.findOneAndUpdate({user: req.session.user._id}, {$set: payload}, {new: true})
			res.json(profile)
		}

		// create
		profile = new Profile({
			name: payload.name,
			hidden: payload.hidden, 
			description: payload.description
		})

		await profile.save()
		res.json(profile)

	} catch (error) {
		res.status(400).json({msg: error})
	}

})


module.exports = router;
