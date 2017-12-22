var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

var mime = {
  ".html" : "text/html",
  ".css" : "text/css",
  ".js" : "application/javascript",
  ".svg" : "image/svg+xml",
  ".jpg" : "image/jpeg"
}

var logger = fs.createWriteStream("log.txt", { flags: 'a' });

function staticServer(req, res){
  if ( req.url == "/") {
    req.url = "/index.html";
  }

  var parseUrl = url.parse(req.url);
  var filename = path.join(__dirname, parseUrl.pathname);
  var extname = path.extname(filename);

  fs.stat(filename, function(err, stats){
    if ( err ) {
      res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      res.end("<h1>" + filename + "파일을 찾을 수 없습니다.</h1>");

    } else if ( stats.isFile ) {
      res.writeHead(200, { "Content-Type": mime[extname] + ";charset=utf-8" });
      var fileStream = fs.createReadStream(filename);
      fileStream.pipe(res);

    } else {  // 폴더일 경우
      res.writeHead(403, { "Content-Type": "text/html;charset=utf-8" });
      res.end("<h1>Directory access is forbidden.</h1>");
    }

    // 로깅 메세지 출력
    logger.write(Date() + ' ' + res.statusCode + " " + req.url + "\n");

  });

  fs.readFile(filename, function(err, data){
    if ( err ) {
    } else {
    }
  });

}

var server = http.createServer(staticServer);

var port = process.argv[2] || 80;
server.listen(port, function(){
  console.log('서버 구동 완료', port);
});