console.log('console.log()');
console.info('console.info()');
console.error('console error()');
console.warn('console warn()');

var clog = require('clog');

// clog.configure({'log level': 2});
clog.configure({'log level' : {
    log: true,
    error: true,
    info: false,
    warn: false,
    debug: false
  }
});

clog.log('clog.log');
clog.info('clog.info');
clog.warn('clog.warn');
clog.error('clog.error');
clog.debug('clog.debug');

