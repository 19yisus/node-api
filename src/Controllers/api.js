const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
  res.send({Response: 'Response from api controller'})
})

module.exports = router