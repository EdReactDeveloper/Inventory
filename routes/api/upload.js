const express = require('express')

const router = express.Router()
 
//  
router.post('/', (req, res)=>{
  if(req.files === null){
    res.status(400).json({msg: 'no file was uploaded'})
  }

  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err =>{
    if(err){
      console.error(err)
      res.status(500).send(err)
    }
    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })

})

module.exports = router; 
