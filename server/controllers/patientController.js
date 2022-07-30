const { findOneAndDelete } = require('./../models/patientModel')
const Patient = require('./../models/patientModel')

exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findOne({ patientID: req.params.id })
        res.status(200).json({
            status: 'success',
            data: {
                patient
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })

    }
}

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json({
            status: 'success',
            results: patients.length,
            data: {
                patients
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.addPatient = async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                patient: newPatient
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findOneAndUpdate({ patientID: req.params.id }, req.body, { new: true })
        res.status(204).json({
            status: 'success',
            data: {
                updatedPatient
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deletePatient = async (req, res) => {
    try {
        await Patient.findOneAndDelete({ patientID: req.params.id })
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}