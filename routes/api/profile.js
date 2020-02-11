const express = require('express');
const {check, validationResult} = require('express-validator')

const router = express.Router();
const Profile = require('../../models/Profile');
const Item = require('../../models/Item'); 


// GET USER'S PROFILE
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


// CREATE 
router.post('/add', [
	check('name', 'min length is 3 chars, max length is 25 chars').isLength({min: 3, max: 25})
], async (req, res)=>{
	const errors = validationResult(req)
	if(!errors.isEmpty()){
		res.status(400).json({errors: errors.array()})
	}

	const payload = req.body
	
	try {
		let profile = await Profile.findOne({user: req.session.user._id})
		if(profile){
			await Profile.findOneAndRemove({user: req.session.user._id})
			await Item.deleteMany({userId: req.session.user._id})
		}

		profile = new Profile({
			user: req.session.user._id,
			name: payload.name,
			description: payload.description,
			hidden: payload.hien
		})

		const result = await profile.save()
		res.json(result)
	} catch (error) {
		res.status(400).json({msg: error})
	}
})


// UPADATE
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

		res.status(404).json({msg: 'profile does not exist'})
		
	} catch (error) {
		res.status(400).json({msg: error})
	}

})


// REMOVE PROFILE TEMPORARY
router.delete('/:id', async (req,res)=>{
	const profile = await Profile.findById(req.params.id)
	if(profile.removed){
		profile.removed = false
		await profile.save()
		res.json(profile.removed)
	}else{
		profile.removed = true
		await profile.save()
		res.json(profile.removed)
	}
})


// RESTORE TEMPORARY REMOVED PROFILE
router.post('/restore', async (req,res)=>{
	const {id} = req.body.payload
	const profile = await Profile.findById(id)
	if(profile){
		profile.removed = false
		await profile.save()
		res.json(profile)
	}

	res.status(404).json({msg: 'profile is not found'})
})

module.exports = router;
