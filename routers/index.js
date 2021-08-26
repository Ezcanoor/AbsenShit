
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


//YANG INI NANTI TINGGAL DICUT KE ATAS AJA BUAT YANG POSISINYA ENAK

/*

const mataKuliahRouter = require('./Mata_Kuliah.js')
const dosenRouter = require('./Dosen.js')

mataKuliahRouter.use('/Mata_Kuliah', mataKuliahRouter)
dosenRouter.use('/dosen', dosenRouter)

*/