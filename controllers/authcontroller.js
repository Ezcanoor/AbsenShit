const {FormTeacher} = require("../models")
class AuthController{
  static index(req, res){
    res.render('index')
  }

  static login(req, res){
    FormTeacher.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
     .then(data => {
       return FormTeacher.update({
         isLogin: true
       },
       {
         where:{
           id: data.id
         }
       })
     })
     .then(data => {
       res.send(data)
     })
     .catch(err => {
       res.send(err)
     })
  }
}

module.exports = AuthController