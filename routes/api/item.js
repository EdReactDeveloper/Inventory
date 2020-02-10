const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');
const Profile = require('../../models/Profile');
const fs = require('fs');

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
			if (!page) {
				res.status(404).json({ msg: 'page is not found' });
			}
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
			// renaming the temp file with the new item id
			const extension = img.match(/\.(gif|jpg|jpeg|tiff|png)$/i)[0];
			const filename = `/uploads/${item._id + extension}`;
			if (img) {
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

// upload img for an existing item or temp img before item is added
router.post('/upload/:id', async (req, res) => {
	const { img } = req.body;
	const { id } = req.params;
	try {
		const item = await Item.findById(id);
		if (!item) {
			const profile = await Profile.findById(id);
			if (profile) {
				res.json({ msg: 'image is uploaded' });
			} else {
				res.status(404).json({ msg: 'page is not found' });
			}
		}
		item.img = img;
		await item.save();
		res.json(item);
	} catch (error) {
		res.status(400).json({ error });
	}
});

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

// find all items to be deleted
const getChildren = async (item, array) => {
	array.push({ id: item._id, img: item.img });
	const id = item._id;
	const children = await Item.find({ parentId: id });
	if (children.length === 0) {
		return;
	}

	for (let i = 0; i < children.length; i++) {
		await getChildren(children[i], array);
	}
};

// delete all imgs
const removeAllImgs = (array) => {
	for (let i = 0; i < array.length; i++) {
		const fullPath = `${__dirname}/../../client/public/${array[i]}`;
		fs.unlink(fullPath, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
};

const removeOneImg = (img)=>{
	if(img){
		const fullPath = `${__dirname}/../../client/public/${img}`;
		fs.unlink(fullPath, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
}

router.delete('/:id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		const {img} = item
		const children = await Item.find({ parentId: item._id });
		await Item.updateMany({ parentId: item._id }, { $set: { parentId: item.parentId } });
		for (let i = 0; i < children.length; i++) {
			children[i].parentId = item._id;
		}
		await Item.findByIdAndRemove(item._id);
		removeOneImg(img)
		res.json({ id: req.params.id, children });
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.delete('/all/:id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		const array = [];
		if (item) {
			await getChildren(item, array);
		}
		const items = array.map((x) => x.id);
		const imgs = array.map((x) => x.img);
		await Item.deleteMany({ _id: { $in: items } });
		removeAllImgs(imgs);
		res.json({ id: req.params.id, children: [] });
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
