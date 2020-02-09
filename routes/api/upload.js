const express = require('express')
const fs = require('fs')

const router = express.Router()
 
//  
router.post('/', (req, res)=>{
  if(req.files === null){
    res.status(400).json({msg: 'no file was uploaded'})
  }

  const file = req.files.file;
  file.mv(`${__dirname}/../../client/public/uploads/${file.name}`, err =>{
    if(err){
      console.error(err)
      res.status(500).send(err)
    }
    res.json({filename: file.name, filePath: `/uploads/${file.name}`})
  })

})

router.post('/delete', (req, res)=>{
  const {path} = req.body
  const fullPath = `${__dirname}/../../client/public/${path}`
    fs.unlink(fullPath, err =>{
      if(err){
        console.error(err)
      }
      res.json(path)
    })
 
})

module.exports = router; 
