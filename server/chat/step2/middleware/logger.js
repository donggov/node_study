var fs = require("fs");

function myLogger(filename) {
  // 로깅 파일
  var logger = fs.createWriteStream(filename, { flags: 'a' });

  return function(req, res){
    // 로깅 메세지 출력
    logger.write(Date() + ' ' + res.statusCode + " " + req.url + "\n");
  };
}

module.exports = myLogger;
