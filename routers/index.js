
const express = require('express')
const AuthController = require('../controllers/authcontroller')
const authenticatedrouter = express.Router()
const student = require('./student')
const router = express.Router()
const subjectRouter = require('./subjects.js')
const lecturerRouter = require('./lecturer.js')

router.get('/login', AuthController.index)
router.post('/login', AuthController.login)
authenticatedrouter.use('/',router)
// authenticatedrouter.use(function(req, res, next) {
//   if (req.session.isLogin === true) {
//     next()
//     return
//   } 
//   res.redirect('/login')
// })

authenticatedrouter.get('/logout', AuthController.logout)
authenticatedrouter.get('/', (req, res)=> {
  res.render('home')
})
authenticatedrouter.use('/students', student)
// authenticatedrouter.use('/courses', course)
authenticatedrouter.use('/subject', subjectRouter)
authenticatedrouter.use('/lecturer', lecturerRouter)


module.exports = authenticatedrouter