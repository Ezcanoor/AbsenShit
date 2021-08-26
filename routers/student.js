const express = require('express')
const StudentController = require('../controllers/studentcontroller')
const router = express.Router()

router.get('', StudentController.list)
router.get('/add', StudentController.addStudentForm)
router.post('/add', StudentController.addStudent)
router.get('/edit/:id', StudentController.editStudentForm)
router.post('/edit/:id', StudentController.editStudent)
router.post('/delete/:id', StudentController.deleteStudent)
module.exports = router