
const express = require('express')
const AuthController = require('../controllers/authcontroller')
const router = express.Router()
const course = require('./course')
const student = require('./student')
const login = require('./login')

router.get('/', (req, res)=> {
  res.send('ini home AbsenShit')
})

router.use('/login', login)
router.use('/students', student)
router.use('/courses', course)

module.exports = router