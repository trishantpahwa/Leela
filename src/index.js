const { Leela } = require('./Leela');
const { Maarg } = require('./Maarg');
const { Dhyaan } = require('./Dhyaan');
const { Tapasya } = require('./Tapasya');

module.exports = {
    // Karam,
    // Fal,
    Tapasya,
    Dhyaan,
    Maarg,
    Leela
};


// let dhyaan = new Dhyaan();
// let tapasya = new Tapasya();

// tapasya.addMultiple(['hell', 'hi', 'bye'], [function (req, res, next) {
//     return res.send('hell');
// },
// function (req, res, next) {
//     return res.send('hi');
// },
// function (req, res, next) {
//     return res.send('bye');
// }
// ]);


// dhyaan.addMultiple(['hell', 'hi', 'bye'], [function (req, res, next) {
//     console.log('hell');
//     next();
// },
// function (req, res, next) {
//     console.log('hi');
//     next();
// },
// function (req, res, next) {
//     console.log('bye');
//     next();
// }
// ]);

// dhyaan.add('hello', function (req, res) {
//     return res.send('hello');
// });

// let maarg = new Maarg('ALL', '/test', null, [
//     new Maarg('ALL', '/te', null, [
//         new Maarg('GET', '/tea', [dhyaan.middleware.hi, dhyaan.middleware.bye], [tapasya.control.hi]),
//         new Maarg('GET', '/teb', [dhyaan.middleware.hell], [tapasya.control.hell])
//     ])
// ]);

// // let maarg2 = new Maarg('GET', '/te', null, [dhyaan.control.hi]);
// // let maarg1 = new Maarg('GET', '/tea', null, [dhyaan.control.bye]);

// Leela.use(maarg);
// // Leela.use(maarg1);
// // Leela.use(maarg2);
