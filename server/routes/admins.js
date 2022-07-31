const express = require('express')
const router = express.Router()
const authController = require('./../controllers/authenticationController')


router.post('/signup', authController.adminSignup)
module.exports = router