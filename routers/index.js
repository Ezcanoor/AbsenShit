
const express = require('express')
const AuthController = require('../controllers/authcontroller')
const authenticatedrouter = express.Router()
const course = require('./course')
const student = require('./student')
const login = require('./login')
const router = express.Router()

router.get('/login', AuthController.index)
router.post('/login', AuthController.login)
authenticatedrouter.use('/',router)
authenticatedrouter.use(function(req, res, next) {
  if (req.session.isLogin === true) {
    next()
    return
  } 
  res.redirect('/login')
})

authenticatedrouter.get('/logout', AuthController.logout)
authenticatedrouter.get('/', (req, res)=> {
  res.send('ini home AbsenShit')
})
authenticatedrouter.use('/students', student)
authenticatedrouter.use('/courses', course)

module.exports = authenticatedrouter