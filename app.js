const express = require('express')
const router = require('./routers')
const session = require('express-session')
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 10000000000000000000000 }
})) 

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})