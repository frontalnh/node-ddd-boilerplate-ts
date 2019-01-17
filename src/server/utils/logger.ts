import { createLogger, format, transports } from 'winston';

const loggersCache = {};
let level = 'debug';
if (process.env.NODE_ENV !== 'development') {
  level = 'info';
}

const myFormat = format.printf(
  its => `${its.timestamp} [${its.label}] ${its.level}: ${its.message}`
);

const defaultTransports = [
  new transports.Console(),
  new transports.File({ filename: 'logs/error.log', level: 'error' })
];

function loggerConf(myLabel = 'DEFAULT logger') {
  return {
    level,
    // colorize: true,
    format: format.combine(
      format.label({ label: myLabel }),
      format.colorize(),
      format.timestamp(),
      format.splat(),
      myFormat
    ),
    transports: defaultTransports
  };
}

export const logger = createLogger(loggerConf());

module.exports = {
  logger,
  getLogger(label) {
    if (!label) {
      return logger;
    }

    const logr =
      loggersCache[label] ||
      (loggersCache[label] = createLogger(loggerConf(label)));

    return logr;
  }
};
