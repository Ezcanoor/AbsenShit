
const express = require('express')
const router = express.Router()
const course = require('./course')
const student = require('./student')

router.get('/', (req, res)=> {
  res.send('ini home AbsenShit')
})
router.use('/students', student)
router.use('/courses', course)

module.exports = router