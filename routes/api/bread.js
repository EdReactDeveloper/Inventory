const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');
const Profile = require('../../models/Profile'); 

router.get('/', async(req, res)=>{
  const {query} = req.query

  const result = await Item.find({_id: {$in: query.split(",")}})
  const profile = await Profile.findById(query.split(",")[0])
  
  res.json([profile, ...result])
})

module.exports = router