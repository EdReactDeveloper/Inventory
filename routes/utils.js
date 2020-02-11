const fs = require('fs');
const Item = require('../models/Item');
const Profile = require('../models/Profile');

// BREAD CRUMBS
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


// GET ALL LINKED DOCS
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

// REMOVE ALL SELECTED IMGS
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

// REMOVE SELECTED IMG
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

module.exports = {getBread, getChildren, removeAllImgs, removeOneImg}