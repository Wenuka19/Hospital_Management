const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A patient must have a name'],
        trim: true
    },
    patientID: {
        type: String,
        required: [true, 'A patient must have an ID'],
        unique: true
    },
    NIC: {
        type: String
    },
    phone_number: {
        type: String,
        required: [true, 'Contact number is compulsory']
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'An account must have a password']
    },
    emergency_contact_name: {
        type: String,
        required: [true, 'Emergency contact details are mandatory']
    },
    emergency_contact_number: {
        type: String,
        reuired: [true, 'Emergency contact details are mandatory']
    },
    patient_type: {
        type: String,
        require: [true, 'A patient must have a type'],
        enum: {
            values: ['RESIDENT', 'NON-RESIDENT'],
            message: 'Patient type is either Resident or Non-Resident'
        }
    },
    birthday: {
        type: Date,
        required: [true, 'Birthday is mandatory']
    }
})

const Patient = mongoose.model('Patient_Details', patientSchema)
module.exports = Patient