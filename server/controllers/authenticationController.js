const Patient = require('./../models/patientModel')
const { promisify } = require('util')
const catchAsync = require('./../utils/catchAsync')
const jwt = require('jsonwebtoken')
const AppError = require('./../utils/appError')
const User = require('./../models/userModel')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}

//Seperate signup functions have to be there for patient,admin and doctor. But all login through the same function
exports.patientSignup = catchAsync(async (req, res, next) => {
    await Patient.create({
        name: req.body.name,
        patientID: req.body.userID,
        NIC: req.body.NIC,
        phone_number: req.body.phone_number,
        email: req.body.email,
        address: req.body.address,
        emergency_contact_name: req.body.emergency_contact_name,
        emergency_contact_number: req.body.emergency_contact_number,
        patient_type: req.body.patient_type,
        birthday: req.body.birthday
    })
    const newUser = await User.create({
        name: req.body.name,
        userID: req.body.userID,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        role: "PATIENT"
    })

    const token = signToken(newUser._id)
    res.status(201).json({
        status: 'success',
        token,
        data: {
            //The password also gets returned in the reponse :/
            user: newUser
        }
    })
})

exports.adminSignup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        userID: req.body.userID,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        role: "ADMIN"
    })
    const token = signToken(newUser._id)
    res.status(201).json({
        status: 'success',
        token,
        data: {
            //The password also gets returned in the reponse :/
            user: newUser
        }
    })
})

exports.loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new AppError('Please provide email and password', 400));
    const user = await User.findOne({ email: email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password'), 401);
    }

    const token = signToken(user._id)
    res.status(200).json({
        status: 'success',
        token
    })
})

exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new AppError('You are not logged in. Please login to get access'), 401)
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
        return next(new AppError('The user no longer exists'), 401)
    }
    //Check if user changed password after the token was issued
    if (freshUser.changedPasswordAfter(decoded.iat)) {
        return next(new AppError('User recently changed the password. Please login again'), 401)
    }
    req.user = freshUser
    next();
})

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to perform this action'), 403)
        }
    }
    next();
}

