const express = require('express')
const router = express.Router()
const authController = require('./../controllers/authenticationController')



router.get('/', (req, res) => {
    res.send("Welcome to the Hospital Management Server")
})

router.post('/login', authController.loginUser)
router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)
router.patch('/changemyPassword', authController.protect, authController.updatePassword)
module.exports = router