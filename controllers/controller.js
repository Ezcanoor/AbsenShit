const {Subject , Lecturer} = require('../models/index')
const date = require('../helper/date.js')

class Controller{
    static showLecturer(req, res){
        Lecturer.findAll()
        .then(data => {
            res.render('lecturer',{data, date})
        })
    }
    static getAddLecturer(req, res){
        let errors = []
        if (req.query.errors){
            errors = req.query.errors.split(',')
        }
        res.render('lecturer_add', {errors})
    }

    static postAddLecturer(req,res){
      Lecturer.create({
          name: req.body.name,
          birthDate: req.body.birthDate,
          email: req.body.email,
          gender:req.body.gender
        })
        .then (data => {
            res.redirect('/Lecturer')
        })
        .catch(err =>{
            res.redirect(`/Lecturer/add?errors=${err}`)
        })
    }

    static getEditLecturer(req, res){
        Lecturer.findByPk(req.params.id)
        .then (data => {
            let errors = []
            if (req.query.errors){
                errors = req.query.errors.split(',')
            }
            console.log(data);
            res.render('Lecturer_edit', {data, errors, date})
        })
    }
    static postEditLecturer(req, res){
        Lecturer.update(
            {
                name: req.body.name,
                birthDate: req.body.birthDate,
                email: req.body.email,
                gender:req.body.gender
            },
            {where: {id:req.params.id}}
        )
        .then (data => {
            res.redirect('/Lecturer')
        })
        .catch (err => {
            res.redirect(`/Lecturer/edit/${req.params.id}?errors=${err}`)
        })
    }
    static deleteLecturer(req, res){
        Lecturer.destroy(
            {where: {id: req.params.id}}
        )
        .then (data => {
            res.redirect('/Lecturer')
        })
        .catch(err => console.log(err))
    }

    static showSubject(req,res){
        Subject.findAll()
        .then(data => {
            res.render('subject',{data})
        })
        .catch(err => {
            res.send(err)
        })        
    }
    static getAddSubject(req,res){
        let lecturer = {}
        let errors = []
        Lecturer.findAll()
        .then(result => {
            lecturer = result
            if (req.query.errors){
                errors = req.query.errors.split(',')
            }
            res.render('subject_add', {errors, lecturer})
        })
        .catch(err => {
            console.log(err)
        })
    }
    static postAddSubject(req,res){
        Subject.create(
            {
                name:req.body.name,
                day:req.body.day,
                time:req.body.time,
                lecturerId:Number(req.body.lecturerId)
            })
            .then (data => {
                res.redirect('/subject')
            })
            .catch(err =>{
                res.redirect(`/subject/add?errors=${err}`)
            })
    }
    static getEditSubject(req,res){
        let lecturer = {}
        let errors = []
        Lecturer.findAll()
        .then(result => {
            lecturer = result
            return Subject.findByPk(Number(req.params.id))
            .then (data => {
                if (req.query.errors){
                    errors = req.query.errors.split(',')
                }
                res.render('subject_edit', {data, lecturer, errors})
            })
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    static postEditSubject(req,res){
        Subject.update(
            {
                name: req.body.name,
                day: req.body.day,
                time: req.body.time,
                LecturerID:req.body.LecturerID
            },
            {where: {id:req.params.id}}
        )
        .then (data => {
            res.redirect('/subject')
        })
        .catch (err => {
            res.redirect(`/subject/edit/${req.params.id}?errors=${err}`)
        })
    }
    static deleteSubject(req,res){
        Subject.destroy(
            {where: {id: req.params.id}}
        )
        .then (data => {
            res.redirect('/subject')
        })
        .catch(err => console.log(err))
    }
}

module.exports=Controller