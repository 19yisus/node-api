const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send({response: "Hello world again from controller home"}))

module.exports = router