const {Student} = require('../models')
const helper = require('../helper/generatename')
class StudentController{
  static list(req, res){
    Student.findAll()
     .then(data => {
       res.render('studentlist', {student: data, generate: helper})
     })
     .catch(err => {
       res.send(err)
     })
  }

  static addStudentForm(req, res){
    res.render('addstudent')
  }

  static addStudent(req, res){
    Student.create(req.body)
     .then( _ => {
       res.redirect('/students')
     })
     .catch(err => {
       console.log(err);
       res.send(err)
     })
  }

  static editStudentForm(req, res){
    Student.findOne({
      where:{
        id: +req.params.id
      }
    })
     .then(data => {
       res.render('editstudent', {student: data})
     })
     .catch(err => {
       res.send(err)
     })

  }

  static editStudent(req, res){
    Student.update(req.body,{
        where: {
          id: +req.params.id
        }
      }
    )
     .then( _ => {
       res.redirect('/students')
     })
     .catch(err => {
       res.send(err)
     })
  }

  static deleteStudent(req, res){
    Student.destroy({
        where:{
          id: +req.params.id
        }
      }
    )
     .then( _ => {
       res.redirect('/students')
     })
  }
}

module.exports = StudentController