const romanRoute = require('../routes/roman-numeral');
const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", romanRoute);

describe('GET /romannumeral', () => {
    test("romanRoute route works", done => {
        request(app)
          .get("/?query=1")
          .expect("Content-Type", /json/)
          .expect({ romanNumber: 'I' })
          .expect(200, done);
    });

    test("romanRoute route returns up to 3999", done => {
        request(app)
            .get("/?query=3999")
            .expect("Content-Type", /json/)
            .expect({ romanNumber: 'MMMCMXCIX' })
            .expect(200, done);
    });

    test("romanRoute route returns 500 with number is too big message when greater than 3999", done => {
        request(app)
            .get("/?query=4000")
            .expect(500, done);
    });


    test("romanRoute route returns 500 with number is too big message when greater than 3999", async done => {
        const response = await request(app).get("/?query=4000") 
        expect(response.status).toBe(500);
        expect(response.text).toContain('Error: The integer was too big, it needs to be between 1-3999');
        done();
    });

    test("romanRoute route returns 500 with number is too small message when less than 1", async done => {
        const response = await request(app).get("/?query=0") 
        expect(response.status).toBe(500);
        expect(response.text).toContain('Error: The integer was too small, it needs to be between 1-3999');
        done();
    });
    
    test("romanRoute route returns 500 with An integer is required message when string is passed in", async done => {
        const response = await request(app).get("/?query=tesla") 
        expect(response.status).toBe(500);
        expect(response.text).toContain('Error: An integer is required');
        done();
    });
})