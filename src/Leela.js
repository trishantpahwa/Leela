const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
require('dotenv').config();

const colors = {
  red: 'D44649',
  white: 'F5F5F5',
  green: '2C7721',
  brown: 'C68B5E',
  orange: 'E66912',
  blue: '050533',
};

const app = express();

app.use(morgan(
    chalk.inverse(':method') +
  ' ' +
  chalk.underline(':url') +
  ' ' +
  chalk.bold(':status') +
  ' ' +
  chalk.magenta(' - :response-time ms') +
  ' ' +
  chalk.blue(' :user-agent'),
));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.start = function() {
  if (process.env.PORT) {
    app.server = app.listen(
        process.env.PORT
        , function() {
          const host = '0.0.0.0:' + process.env.PORT;
          const timestamp = new Date().toString();
          const startMessage = 'pe leela aarambh hui';
          console.clear();
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).underline(host) +
          chalk.hex('000000').dim.bgWhite(' ' + timestamp + ' ') +
          chalk.underline.italic.bgGreen(startMessage));
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log(
              chalk.dim.bgHex(colors.orange).dim(' '.repeat(host.length)) +
          chalk.hex('000000').dim.bgWhite(' '.repeat(timestamp.length + 2)) +
          chalk.hex('000000').dim.bgGreen(' '.repeat(startMessage.length)),
          );
          console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
        });
  } else console.log('Set host and port please.');
};

module.exports = {
  Leela: app,
};
