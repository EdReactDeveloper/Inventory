const express = require('express')
const fs = require('fs')

const router = express.Router()
 
//  
router.post('/:id', (req, res)=>{
  if(req.files === null){
    res.status(400).json({msg: 'no file was uploaded'})
  }

  const file = req.files.file
  const {id} = req.params
  const extension = file.name.match(/\.(gif|jpg|jpeg|tiff|png)$/i)[0]
  const filename = id+extension
  file.mv(`${__dirname}/../../client/public/uploads/${filename}`, err =>{
    if(err){
      console.error(err)
      res.status(500).send(err)
    }
    res.json({filename, filePath: `/uploads/${filename}`})
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
