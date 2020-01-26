const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../../models/Item');

router.get('/', async(req, res)=>{
  const {query} = req.query
  
  const result = await Item.find({_id: {$in: query.split(",")}})
  res.json(result)
})

module.exports = router