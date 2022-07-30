const express = require('express')
const router = express.Router()
const patientController = require('./../controllers/patientController')

router
    .route('/')
    .get(patientController.getAllPatients)
    .post(patientController.addPatient)

router
    .route('/:id')
    .get(patientController.getPatient)
    .patch(patientController.updatePatient)
    .delete(patientController.deletePatient)


module.exports = router