const express = require('express')
const LecturerRouter = express.Router()
const Controller = require('../controllers/controller.js')

LecturerRouter.get('/', Controller.showLecturer)

LecturerRouter.get('/add', Controller.getAddLecturer)

LecturerRouter.post('/add', Controller.postAddLecturer)

LecturerRouter.get('/edit/:id', Controller.getEditLecturer)

LecturerRouter.post('/edit/:id', Controller.postEditLecturer)

LecturerRouter.get('/delete/:id', Controller.deleteLecturer)

module.exports=LecturerRouter