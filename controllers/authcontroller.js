const { FormTeacher } = require("../models")
class AuthController {
  static index(req, res) {
    res.render('index')
  }

  static login(req, res) {
    let teacher = null
    FormTeacher.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
      .then(data => {
        teacher = data
        return FormTeacher.update({
          isLogin: true
        },
          {
            where: {
              id: data.id
            }
          })
      })
      .then(_ => {
        req.session.isLogin = true
        req.session.teacherId = teacher.id
        res.redirect('/')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static logout(req, res) {
    FormTeacher.findByPk(req.session.teacherId)
      .then(data => {
        req.session.isLogin = false
        return FormTeacher.update({isLogin: false},
          {
            where: {
              id: data.id
            }
          })
      })
      .then(_ => {
        res.redirect('/')
      })
  }




}

module.exports = AuthController