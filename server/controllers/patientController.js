const AppError = require('../utils/appError')
const Patient = require('./../models/patientModel')
const catchAsync = require('./../utils/catchAsync')

exports.getPatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findOne({ patientID: req.params.id })
    if (!patient) {
        return next(new AppError('No patient found with that ID', 404))
    }
    res.status(200).json({
        status: 'success',
        data: {
            patient
        }
    })
})

exports.getAllPatients = catchAsync(async (req, res, next) => {
    const patients = await Patient.find()
    res.status(200).json({
        status: 'success',
        results: patients.length,
        data: {
            patients
        }
    })
})

exports.addPatient = catchAsync(async (req, res, next) => {
    const newPatient = await Patient.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            patient: newPatient
        }
    })
})

exports.updatePatient = catchAsync(async (req, res, next) => {
    const updatedPatient = await Patient.findOneAndUpdate({ patientID: req.params.id }, req.body, { new: true })
    if (!updatedPatient) {
        return next(new AppError('No patient found with that ID', 404))
    }
    res.status(204).json({
        status: 'success',
        data: {
            updatedPatient
        }
    })
})

exports.deletePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findOneAndDelete({ patientID: req.params.id })
    if (!patient) {
        return next(new AppError('No patient found with that ID', 404))
    }
    res.status(204).json({
        status: 'success',
        data: null
    })
})
