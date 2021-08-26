const express = require('express')
const DosenRouter = express.Router()
const Controller = require('../controller/controller.js')

DosenRouter.get('/', Controller.showDosen)

DosenRouter.get('/add', Controller.getAddDosen)

DosenRouter.post('/add', Controller.postAddDosen)

DosenRouter.get('/edit/:id', Controller.getEditDosen)

DosenRouter.post('/edit/:id', Controller.postEditDosen)

DosenRouter.get('/delete/:id', Controller.deleteDosen)

module.exports=DosenRouter