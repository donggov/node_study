var net = require("net");

var server = net.createServer(function(s){
  console.log("클라이언트 접속.", s.remoteAddress);
  s.write("hi");
  s.on("data", function(data){
    console.log(data.toString());
    s.write("반송 : " + data);
  });

  // error 이벤트를 반드시 처리해야 한다.
  s.on("error", function(err){
    console.error(err);
  });
  s.on("close", function(err){
    console.log(s.remoteAddress, "연결 종료됨");
  });
});

var port = process.argv[2] || 2345;
server.listen(port, function(){
  console.log('서버 구동 완료', port);
});
