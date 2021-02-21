const { Leela, Maarg, Dhyaan, Tapasya } = require('../src');
const axios = require('axios');
const assert = require('assert');

const dhyaan1 = new Dhyaan();
const tapasya1 = new Tapasya('tester');
dhyaan1.add('test', function (req, res, next) {
    req.middlewareTest = req.params.test;
    next();
});
tapasya1.add('test', function (req, res) {
    res.json({ middleware: req.middlewareTest, controller: req.params.test });
});
const maarg1 = new Maarg('GET', '/:test', [dhyaan1.middleware.test], [tapasya1.control.test])
Leela.use(maarg1);

Leela.start();

async function testMaarg() {
    return await axios.get('http://localhost:8080/testable-route');
}

describe('Test route', function () {
    describe('Should try to send a request on a route.', function () {
        it('should get a response', async function () {
            const response = await testMaarg();
            assert.equal(response.status, 200);
            assert.equal(JSON.stringify({ middleware: 'testable-route', controller: 'testable-route' }), '{"middleware":"testable-route","controller":"testable-route"}');
        });
    });
});