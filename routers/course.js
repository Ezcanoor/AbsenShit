const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  // res.send('ini di courses')
  res.render('index')
})

module.exports = router