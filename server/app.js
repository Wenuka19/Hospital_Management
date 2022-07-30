const express = require('express')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')

const app = express()
const indexRouter = require('./routes/index')
const patientRouter = require('./routes/patients')

app.use(express.json({ limit: '10kb' }))
app.use(express.static('public'))

app.use(mongoSanitize())  //Data sanitization against NoSQL Query Injections
app.use(xss()) //Data sanitization against XSS
app.use(hpp()) //Prevent Http Parameter pollution

//ROUTES
app.use('/', indexRouter)
app.use('/patients', patientRouter)

module.exports = app
