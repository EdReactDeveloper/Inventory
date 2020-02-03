const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');
const Profile = require('../../models/Profile');

const getBread = async (page, path) => {
	if (!page) {
		return;
	}
	try {
		let item = await Item.findOne({ _id: page.parentId });
		if (!item) {
			item = await Profile.findOne({ _id: page.parentId });
		}
		if (item) {
			path.unshift({ name: item.name, id: item._id });
		}
		await getBread(item, path);
	} catch (error) {
		console.log(error);
	}
};

// GET ITEMS
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let page = await Item.findById(id);
		if (!page) {
			page = await Profile.findById(id);
		}
		const bread = [];
		await getBread(page, bread);
		const items = await Item.find({ parentId: id });
		const payload = { page, items, bread };
		res.json(payload);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// UPDATE ITEM

router.post('/edit', async (req, res) => {
	const payload = req.body;
	try {
		let page = await Item.findById({ _id: payload._id });
		if (page) {
			page = await Item.findOneAndUpdate({ _id: payload._id }, { $set: payload }, { new: true });
			res.json(page);
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

// ADD ITEM
router.post(
	'/add',
	[ check('name', 'name is required').not().isEmpty(), check('tags', 'tag is required').not().isEmpty() ],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
		}
		const {
			name,
			description,
			tags,
			parentId,
			path,
			location,
			collectionId,
			category,
			checked,
			shared,
			sharedWith,
			count,
			type,
			status,
			img
		} = req.body;

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
			await item.save();
			res.json(item);
		} catch (error) {
			res.status(400).json({ error });
		}
	}
);

router.post('/move', async (req, res) => {
	const { docs, id, path } = req.body;
	try {
		const updatedItems = await Item.find({ _id: { $in: docs } });
		await Item.updateMany({ _id: { $in: docs } }, { $set: { parentId: id, path } });

		for (let i = 0; i < updatedItems.length; i++) {
			updatedItems[i].path = path;
			updatedItems[i].parentId = id;
		}

		res.json(updatedItems);
	} catch (error) {
		res.status(400).json({ error });
	}
});

const getApi = async (item, array) => {
	array.push(item._id)
	const id = item._id
	const children = await Item.find({ parentId: id });
	if(children.length === 0){
		return ;
	}

	for (let i = 0; i < children.length; i++) {
		await getApi(children[i], array);
	}
};


router.delete('/:id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		const array = [];
		if(item){
			await getApi(item, array);
		}

		await Item.deleteMany({ _id: {$in: array }})
		// const children = await Item.find({ parentId: item._id });
		// await Item.updateMany({ parentId: item._id }, { $set: { parentId: item.parentId } });
		// for (let i = 0; i < children.length; i++) {
		// 	children[i].parentId = item._id;
		// }
		// await Item.findByIdAndRemove(item._id);
		res.json({ id: req.params.id });
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
