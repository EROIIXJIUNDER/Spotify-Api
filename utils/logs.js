const fs = require('fs');
const path = require('path');

// Adjust the path if you want the log file in a different directory
const logFilePath = path.join(__dirname, 'logs.txt');

const logData = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file', err);
    }
  });
};

module.exports = { logData };
