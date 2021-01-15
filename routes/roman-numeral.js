const convertToRoman = require('../utils/roman-numeral-helper')
const express = require('express');
const { BadRequest } = require('../utils/errors');
const router = express.Router();

router.get('/', (req, res, next) => {
    const { query } = req.query;
    const numToConvert = parseInt(query) || 'string';
    try {
        if (numToConvert < 1 || query === '0') {
            throw new BadRequest('The integer was too small, it needs to be between 1-3999')
        }
        if (numToConvert > 3999) {
            throw new BadRequest('The integer was too big, it needs to be between 1-3999')
        }
        if (numToConvert === 'string') {
            throw new BadRequest('An integer is required')
        }
            
        const romanNumber = convertToRoman(numToConvert)
    
        res.status(200).json({
            romanNumber
        });
    } catch ( err ) {
        next(err)
    }
});

module.exports = router;