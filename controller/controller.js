const {Mata_Kuliah , Dosen} = require('../models/index')

class Controller{
    static showDosen(req, res){
        Dosen.findAll()
        .then(data => {
            res.render('dosen',{data})
        })
    }
    static getAddDosen(req, res){
        let errors = []
        if (req.query.errors){
            errors = req.query.errors.split(',')
        }
        res.render('dosen_add', {errors})
    }

    static postAddDosen(req,res){
      Dosen.create({
          name: req.body.name,
          Tanggal_Lahir: req.body.Tanggal_Lahir,
          email: req.body.email,
          gender:req.body.gender
        })
        .then (data => {
            res.redirect('/dosen')
        })
        .catch(err =>{
            res.redirect(`/dosen/add?errors=${err}`)
        })
    }

    static getEditDosen(req, res){
        Dosen.findByPk(Number(request.params.id))
        .then (data => {
            let errors = []
            if (req.query.errors){
                errors = req.query.errors.split(',')
            }
            res.render('dosen_edit', {data, errors})
        })
    }
    static postEditDosen(req, res){
        Dosen.update(
            {
                name: req.body.name,
                Tanggal_Lahir: req.body.Tanggal_Lahir,
                email: req.body.email,
                gender:req.body.gender
            },
            {where: {id:req.params.id}}
        )
        .then (data => {
            res.redirect('/dosen')
        })
        .catch (err => {
            res.redirect(`/dosen/edit/${req.params.id}?errors=${err}`)
        })
    }
    static deleteDosen(req, res){
        Dosen.destroy(
            {where: {id: req.params.id}}
        )
        .then (data => {
            res.redirect('/dosen')
        })
        .catch(err => console.log(err))
    }

    static showMataKuliah(req,res){
        Mata_Kuliah.findAll()
        .then(data => {
            res.render('Mata_Kuliah',{data})
        })
        .catch(err => {
            res.send(err)
        })        
    }
    static getAddMataKuliah(req,res){
        let dosen = {}
        let errors = []
        Dosen.findAll()
        .then(result => {
            dosen = result
            if (req.query.errors){
                errors = req.query.errors.split(',')
            }
            res.render('Mata_Kuliah_add', {errors, dosen})
        })
        .catch(err => {
            console.log(err)
        })
    }
    static postAddMataKuliah(req,res){
        Mata_Kuliah.create(
            {
                name:req.body.name,
                hari:req.body.hari,
                jam:req.body.jam,
                PengajarID:req.body.PengajarID
            })
            .then (data => {
                res.redirect('/Mata_Kuliah')
            })
            .catch(err =>{
                res.redirect(`/Mata_Kuliah/add?errors=${err}`)
            })
    }
    static getEditMataKuliah(req,res){
        let dosen = {}
        let errors = []
        Dosen.findAll()
        .then(result => {
            dosen = result
            return Mata_Kuliah.findByPk(Number(request.params.id))
            .then (data => {
                if (req.query.errors){
                    errors = req.query.errors.split(',')
                }
                res.render('Mata_Kuliah_edit', {data, errors})
            })
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    static postEditMataKuliah(req,res){
        Mata_Kuliah.update(
            {
                name: req.body.name,
                hari: req.body.hari,
                jam: req.body.jam,
                PengajarID:req.body.PengajarID
            },
            {where: {id:req.params.id}}
        )
        .then (data => {
            res.redirect('/Mata_Kuliah')
        })
        .catch (err => {
            res.redirect(`/Mata_Kuliah/edit/${req.params.id}?errors=${err}`)
        })
    }
    static deleteMataKuliah(req,res){
        Mata_Kuliah.destroy(
            {where: {id: req.params.id}}
        )
        .then (data => {
            res.redirect('/Mata_Kuliah')
        })
        .catch(err => console.log(err))
    }
}

module.exports=Controller