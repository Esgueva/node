const moment = require('moment');

class CustomConsole {
  constructor() {
    this.console = new console.Console(process.stdout, process.stderr);
  }

  Info(msg) {
    console.info(
      '\x1b[36m%s\x1b[0m',
      '[INFO] - ' + moment().format('D/MM/YY h:mm:ss a') + ' :: ' + msg,
      '\x1b[0m'
    );
  }

  Warn(msg) {
    console.warn(
      '\x1b[33m%s\x1b[0m',
      '[WARNING] - ' + moment().format('D/MM/YY h:mm:ss a') + ' :: ' + msg,
      '\x1b[0m'
    );
  }

  Error(msg) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      '[ERROR] - ' + moment().format('D/MM/YY h:mm:ss a') + ' :: ' + msg,
      '\x1b[0m'
    );
  }

  Success(msg) {
    console.log(
      '\x1b[32m%s\x1b[0m',
      '[SUCCESS] - ' + moment().format('D/MM/YY h:mm:ss a') + ' :: ' + msg,
      '\x1b[0m'
    );
  }
}

module.exports = CustomConsole;
