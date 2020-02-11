const express = require('express');
const fs = require('fs');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');
const Profile = require('../../models/Profile');
const { getBread, getChildren, removeAllImgs, removeOneImg } = require('../utils');


// GET ITEMS
router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		let page = await Item.findById(id);
		if (!page) {
			page = await Profile.findById(id);
			if (!page) {
				res.status(404).json({ msg: 'page is not found' });
			}
		}

		// GET BREADCRUMBS
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
	payload.updated = new Date();
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
			// RENAME THE TEMP FILE
			if (img) {
				const extension = img.match(/\.(gif|jpg|jpeg|tiff|png)$/i)[0];
				const filename = `/uploads/${item._id + extension}`;
				fs.rename(
					`${__dirname}/../../client/public/${img}`,
					`${__dirname}/../../client/public/${filename}`,
					async (err) => {
						try {
							item.img = filename;
							await item.save();
							res.json(item);
						} catch (error) {
							console.log('error', error);
						}
					}
				);
			} else {
				res.json(item);
			}
		} catch (error) {
			res.status(400).json({ error });
		}
	}
);


// SAVE UPLOADED IMG TO ITEM
router.post('/upload/:id', async (req, res) => {
	const { img } = req.body;
	const { id } = req.params;
	try {
		const item = await Item.findById(id);
		// add form file upload msg
		if (!item) {
			const profile = await Profile.findById(id);
			if (profile) {
				res.json({ msg: 'image is uploaded' });
			} else {
				res.status(404).json({ msg: 'page is not found' });
			}
		}

		// save file path to item
		item.img = img;
		await item.save();
		res.json(item);
	} catch (error) {
		res.status(400).json({ error });
	}
});


// MOVE DOCS
router.post('/move', async (req, res) => {
	const { docs, id, path } = req.body;
	try {
		const updatedItems = await Item.find({ _id: { $in: docs } });
		// change children parent path
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


// DELETE ONE FILE
router.delete('/:id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		const { img } = item;
		const children = await Item.find({ parentId: item._id });

		// move children one lvl up
		await Item.updateMany({ parentId: item._id }, { $set: { parentId: item.parentId } });
		for (let i = 0; i < children.length; i++) {
			children[i].parentId = item._id;
		}

		await Item.findByIdAndRemove(item._id);

		// remove doc's img
		removeOneImg(img);
		res.json({ id: req.params.id, children });
	} catch (error) {
		res.status(400).json({ error });
	}
});


// DELETE FILE AND IT'S DECENDANTS
router.delete('/all/:id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		const array = [];
		if (item) {
			// delete all the inner docs
			await getChildren(item, array);
		}

		// get ids of elements to be deleted
		const items = array.map((x) => x.id); 
		const imgs = array.map((x) => x.img); 

		await Item.deleteMany({ _id: { $in: items } }); // remove docs
		removeAllImgs(imgs); // remove imgs
		res.json({ id: req.params.id, children: [] });
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
