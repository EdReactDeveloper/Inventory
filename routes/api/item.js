const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');


// GET ITEMS
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const items = await Item.find({parentId: id });
	console.log(items)
		res.json(items);
	
});

// ADD ITEMS
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
	
    await item.save()
    res.json(item)
	}
);

module.exports = router
