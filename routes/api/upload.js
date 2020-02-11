const express = require('express');
const fs = require('fs');

const router = express.Router();
const Item = require('../../models/Item');

const removeImg = (img) => {
	if (img) {
		const fullPath = `${__dirname}/../../client/public/${img}`;
		return fs.unlink(fullPath, (err) => {
			if (err) {
				console.error(err);
			}
			return img;
		});
	}
	return null;
};

//  UPLOAD IMG
router.post('/:id', (req, res) => {
	if (req.files === null) {
		res.status(400).json({ msg: 'no file was uploaded' });
	}

	const file = req.files.file;
	const { id } = req.params;
	
	// 1. create new img name
	const extension = file.name.match(/\.(gif|jpg|jpeg|tiff|png)$/i)[0];
	const filename = id + extension;

	// 2. upload new img
	file.mv(`${__dirname}/../../client/public/uploads/${filename}`, (err) => {
		if (err) {
			console.error(err);
			res.status(500).send(err);
		}
		res.json({ filename, filePath: `/uploads/${filename}` });
	});
});

// REMOVE IMG
router.post('/delete/:id', async (req, res) => {
	const { img } = req.body;
	const { id } = req.params;

	// 1. remove img from fs
	removeImg(img);

	try { 
		// 2. remove img path from doc
		const item = await Item.findById(id); // for edit form
		if (item) {
			item.img = '';
			await item.save();
			res.json(item);
		} else { // for add form
			res.json(null)
		}		
	} catch (error) {
		res.status(400).json();
	}
});

module.exports = router;
