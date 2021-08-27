const express = require('express')
const SubjectRouter = express.Router()
const Controller = require('../controllers/controller.js')

SubjectRouter.get('/', Controller.showSubject)

SubjectRouter.get('/add', Controller.getAddSubject)

SubjectRouter.post('/add', Controller.postAddSubject)

SubjectRouter.get('/edit/:id', Controller.getEditSubject)

SubjectRouter.post('/edit/:id', Controller.postEditSubject)

SubjectRouter.get('/delete/:id', Controller.deleteSubject)

SubjectRouter.get('/attend/:id', Controller.getAttendSubject)

SubjectRouter.post('/attend/:id', Controller.postAttendSubject)

module.exports=SubjectRouter