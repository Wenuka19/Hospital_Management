const express = require('express')
const router = express.Router()
const patientController = require('./../controllers/patientController')
const authController = require('./../controllers/authenticationController')

router.post('/signup', authController.patientSignup)

/*Route protections are commented out*/
router
    .route('/')
    .get(/*authController.protect,authController.restrictTo('ADMIN'),*/patientController.getAllPatients)
    .post(/*authController.protect,authController.restrictTo('ADMIN'),*/ patientController.addPatient)

router
    .route('/:id')
    .get(/*authController.protect, authController.protect,authController.restrictTo('ADMIN','DOCTOR'),*/patientController.getPatient)
    .patch(/*authController.protect,authController.restrictTo('ADMIN'),*/patientController.updatePatient)
    .delete(/*authController.protect, authController.restrictTo('ADMIN'), */patientController.deletePatient)


module.exports = router