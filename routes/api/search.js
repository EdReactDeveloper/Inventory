const express = require('express');

const router = express.Router();
const Item = require('../../models/Item');

// FIND DOCS BY NAME, LOCATION, TAGS
router.get('/', async (req, res) => {
	const { query } = req.query;
	const reqexp = new RegExp(query);
	try {
		const items = await Item.find({
			$or: [ { name: { $regex: reqexp } }, { location: { $regex: reqexp } }, { tags: { $regex: reqexp } } ]
		});
		if (items) {
			res.json({ items, query });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
