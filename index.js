const { Leela, Maarg, Dhyaan, Tapasya } = require('./src/index');


let dhyaan = new Tapasya();

dhyaan.add('hello', function (req, res) {
    return res.send('hello');
});

let maarg2 = new Maarg('GET', '/te', null, [dhyaan.control.hello]);

Leela.use(maarg2);
