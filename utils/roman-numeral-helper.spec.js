const convertToRoman = require('./roman-numeral-helper')

describe('Roman Numeral Helper', () => {
    test('should return I when 1 is inputted', () => {
        const result = convertToRoman(1);
        const expected = 'I';
        expect(expected).toBe(result);
    });

    test('should return empty string when string is passed in', () => {
        const result = convertToRoman('hello');
        const expected = '';
        expect(expected).toBe(result);
    });

    test('should return MMMCMXCIX when 3999 is passed in as a string', () => {
        const result = convertToRoman('3999');
        const expected = 'MMMCMXCIX';
        expect(expected).toBe(result);
    });
});