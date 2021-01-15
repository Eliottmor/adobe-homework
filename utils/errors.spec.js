const { BadRequest, GeneralError } = require('./errors')

describe('Error Class', () => {
    test('should return 400 if it is of Bad Request type', () => {
        const error = new BadRequest('bad request');
        expect(error.getCode()).toBe(400);
        expect(error.message).toBe('bad request');
    });

    test('should return 500 if it is a general error', () => {
        const error = new GeneralError('general')
        expect(error.getCode()).toBe(500);
        expect(error.message).toBe('general')
    });
});