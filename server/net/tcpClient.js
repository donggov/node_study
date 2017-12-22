var net = require("net");

var s = new net.Socket();
var target = {
  // host : "localhost",
  // port: 2345
  host : "naver.com",
  port: 80
}

s.connect(target.port, target.host, function(){
  console.log("서버 접속 완료");
  s.on("data", function(data){
    console.log(data.toString());
  });
  // s.write("hello");

});

s.on("close", function(){
  console.log("서버 연결 종료됨");
});

s.on("error", function(err){
  // 필요에 따라서 서버에 재접속하는 코드 작성
  console.error(err);
});

// 표준 입력장치의 메세지 수신
process.stdin.on("data", function(data){
  s.write(data);
});

