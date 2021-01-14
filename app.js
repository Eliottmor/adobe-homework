// import express
const express = require('express');

const app = express();

// import morgan
const morgan = require('morgan');
app.use(morgan('dev'))

// import body parser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     const error = new Error("Not found");
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500 );
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// });

// Route to handle request

const romanNumeralRoutes = require('./routes/roman-numeral.js')
app.use('/romannumeral', romanNumeralRoutes)

// export app
module.exports = app;