const express = require('express')
const AuthController = require('../controllers/authcontroller')
const router = express.Router()

router.get('', AuthController.index)
router.post('', AuthController.login)

module.exports = router