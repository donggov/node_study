var net = require("net");
var fs = require("fs");
var path = require("path");

var server = net.createServer(function(s){
  console.log("클라이언트 접속.", s.remoteAddress);
  s.on("data", function(data){
    console.log("data : " + data.toString());
    var url = data.toString().split("\n")[0].split(" ")[1];    

    if ( url = "/") {
      url = "/index.html";
    }

    fs.readFile(path.join(__dirname, url), function(err, data){
      if ( err ) {
        s.write("HTTP/1.1 404 Not found\n");
        s.write("Content-Type: text/html;charset=utf-8\n");
        s.write("\n");
        s.end("<h1>" + url + "파일을 찾을 수 없습니다.</h1>");
      } else {
        s.write("HTTP/1.1 200 OK\n");
        s.write("Content-Type: text/html;charset=utf-8\n");
        s.write("\n");
        s.end(data);
      }
    });

  });

  // error 이벤트를 반드시 처리해야 한다.
  s.on("error", function(err){
    // console.error(err);
  });
  s.on("close", function(err){
    console.log(s.remoteAddress, "연결 종료됨");
  });
});

var port = process.argv[2] || 80;
server.listen(port, function(){
  console.log('서버 구동 완료', port);
});
