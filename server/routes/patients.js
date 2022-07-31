const express = require('express')
const router = express.Router()
const patientController = require('./../controllers/patientController')
const authController = require('./../controllers/authenticationController')

router.post('/signup', authController.patientSignup)


router
    .route('/')
    .get(patientController.getAllPatients)
    .post(patientController.addPatient)

router
    .route('/:id')
    .get(authController.protect, patientController.getPatient)
    .patch(patientController.updatePatient)
    .delete(authController.protect, authController.restrictTo('ADMIN'), patientController.deletePatient)


module.exports = router