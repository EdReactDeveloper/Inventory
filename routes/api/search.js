const express = require('express')

const router = express.Router()
const Item = require('../../models/Item'); 

router.get('/', async(req, res)=>{
  const {query} = req.query
  try {
    const items = await Item.find({name: query})
    if(items){
      res.json({items, query})
    }
  } catch (error) {
    res.status(400).json({error})
  }
})

module.exports = router; 