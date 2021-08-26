const express = require('express')
const router = require('./routers')
const app = express()
const PORT = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})