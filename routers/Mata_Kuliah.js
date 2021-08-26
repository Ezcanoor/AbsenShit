const express = require('express')
const mataKuliahRouter = express.Router()
const Controller = require('../controller/controller.js')

mataKuliahRouter.get('/', Controller.showMataKuliah)

mataKuliahRouter.get('/add', Controller.getAddMataKuliah)

mataKuliahRouter.post('/add', Controller.postAddMataKuliah)

mataKuliahRouter.get('/edit/:id', Controller.getEditMataKuliah)

mataKuliahRouter.post('/edit/:id', Controller.postEditMataKuliah)

mataKuliahRouter.get('/delete/:id', Controller.deleteMataKuliah)

module.exports=mataKuliahRouter