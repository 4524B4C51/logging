const makeLogMessage = (logType, message, payload = {}) => {
  return new Date().toLocaleTimeString() + ' [' + logType + '] Message: ' + message 
  + '\nDetails:\n' + JSON.stringify(payload, null, 2);
}

const INFO  = 'INFO';
const DEBUG = 'DEBUG';
const ERROR = 'ERROR';
const WARN  = 'WARN';


const log = (message, payload) => logType => makeLogMessage(logType, message, payload);
const info = (message, payload) => log(message, payload)(INFO);
const debug = (message, payload) => log(message, payload)(DEBUG);
const error = (message, payload) => log(message, payload)(ERROR);
const warn = (message, payload) => log(message, payload)(WARN);

module.exports = {
  debug,
  error,
  info,
  warn
}
