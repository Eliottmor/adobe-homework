// import express
const express = require('express');
const handleErrors = require('./utils/handleErrors');

const app = express();

// import morgan
const morgan = require('morgan');
app.use(morgan('dev'))

// import body parser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle request
const romanNumeralRoutes = require('./routes/roman-numeral.js')
app.use('/romannumeral', romanNumeralRoutes)

app.use(handleErrors)

// export app
module.exports = app;