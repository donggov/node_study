var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res){
  var url = req.url;

  if ( url = "/") {
    url = "/index.html";
  }

  fs.readFile(path.join(__dirname, url), function(err, data){
    if ( err ) {
      res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
      res.end("<h1>" + url + "파일을 찾을 수 없습니다.</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.end(data);
    }
  });

});

var port = process.argv[2] || 80;
server.listen(port, function(){
  console.log('서버 구동 완료', port);
});
