const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, label, printf } = format;

addColors({
  warn: "yellow",
  error: "red",
  info: "green",
  debug: "blue"
})

const logger = createLogger({
  format: combine(timestamp(),
    format.colorize(),
  format.json(),
  ),
  transports: [new transports.Console()]
});

module.exports = logger; 