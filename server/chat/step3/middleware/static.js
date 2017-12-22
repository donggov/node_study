var path = require("path");
var url = require("url");
var fs = require("fs");

var mime = {
  ".html" : "text/html",
  ".css"  : "text/css",
  ".js"   : "application/javascript",
  ".svg"  : "image/svg+xml",
  ".jpg"  : "image/jpeg",
  ".png"  : "image/png"
}


function staticServer(req, res, next) {
  if ( req.url == "/") {
    req.url = "/index.html";
  }

  var parseUrl = url.parse(req.url);
  var filename = path.join(base, parseUrl.pathname);
  var extname = path.extname(filename);

  fs.stat(filename, function(err, stats){
    if ( err ) {
      // res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      // res.end("<h1>" + filename + "파일을 찾을 수 없습니다.</h1>");
      next();

    } else if ( stats.isFile ) {
      res.writeHead(200, { "Content-Type": mime[extname] + ";charset=utf-8" });
      var fileStream = fs.createReadStream(filename);
      fileStream.pipe(res);

    } else {  // 폴더일 경우
      res.writeHead(403, { "Content-Type": "text/html;charset=utf-8" });
      res.end("<h1>Directory access is forbidden.</h1>");
    }

  });

}


var base;
function setBase(dir){
  base = dir;
  return staticServer;
}

module.exports = setBase;

// app.js에서 사용
// var static = require("./middleware/static");
// static(path.join(__dirname, "public"))(req, res);