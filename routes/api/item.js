const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');


// GET ITEMS
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
			const items = await Item.find({parentId: id });
	const page = await Item.findById({_id: id})
	const payload = {page, items}
		res.json(payload);
	} catch (error) {
		res.status(400).json({error})
	}

	
});

// UPDATE ITEM

router.post('/edit', async (req, res) => {
	const payload = req.body
	try {
		let page = await Item.findById({_id: payload._id})
		if(page){
		page = await Item.findOneAndUpdate({_id: payload._id}, {$set: payload}, {new: true})
		res.json(page)
	}
	} catch (error) {
		res.status(400).json({error})
	}
});


// ADD ITEM
router.post(
	'/add',
	[
		check('name', 'name is required').not().isEmpty(),
		check('location', 'location is required').not().isEmpty(),
		check('tags', 'tag is required').not().isEmpty()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
		}
    const {name, description, tags, parentId, path, location, collectionId, category, checked, shared, sharedWith, count, type, status, img  } = req.body
    
    const item = new Item({
			userId: req.session.user._id,
			name,
			description,
			tags, 
			parentId,
			collectionId, 
			img,
			path, 
			category, 
			status,
			type,
			location, 
			count,
			checked, 
			shared,
			sharedWith,
			updated: new Date(),
			created: new Date()
		});

		try {
			 await item.save()
    res.json(item)
		} catch (error) {
			res.status(400).json({error})
		}
	
   
	}
);

module.exports = router
