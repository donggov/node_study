/**
 * 웹서버 개발시 해야 할 일들
 * 1. favicon 처리
 * 2. 로깅
 * 3. post 방식의 body 파싱
 * 4. json 형태의 데이터 파싱
 * 5. url 텍스트 인코딩
 * 6. 쿠키 파싱
 * 7. 세션 처리(로그인 상태 유지)
 * 8. 정적 자원 응답
 * 9. 동적 자원 응답
 * 10. 파일 업로드
 * 11. DB 핸들링
 * 12. 보안(권한, 인증)
 * 13. 에러 처리(404, 500 등)
 * ...
 * 각각의 기능을 미들웨어(함수)로 작성
 * connect 모듈을 이용해서 개발
 * connect@2 -> 위의 기능을 대신해주는 미들웨어(미들웨어 내장)
 * connect@3 -> 미들웨어는 제공하지 않음. 미들웨어를 관리하는 컨테이너
 */

var connect = require("connect");
var path = require("path");
var fs = require("fs");
// var logger = require("./middleware/logger");
// var static = require("./middleware/static");
var logger = require("morgan");
var static = require("serve-static");
var favicon = require("serve-favicon");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var ejs = require("ejs");

var printreq = require("./middleware/printreq");
var index = require("./routes/index");

var app = connect();

app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")));
app.use(printreq("Before"));
// app.use(logger(path.join(__dirname, 'log.txt')));
app.use(logger("dev"));
app.use(static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
  secret : "keyboard cat"
}));
app.use(printreq("After"));
app.use("/", index);


// 404 에러 처리 미들웨어
app.use(function(req, res, next){
  var err = new Error(req.url + " 파일을 찾을 수 없습니다.");
  err.status = 404;
  
  var filename = path.join(__dirname, "views", "error.ejs");

  // fs.readFile(filename, function(error, data){
  //   res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
  //   data = data.toString().replace("<%=message%>", err.message.toString())
  //                         .replace("<%=error.status%>", err.status)
  //                         .replace("<%=error.stack%>", err.stack);
  //   res.end(data);
  // });

  ejs.renderFile(filename, {
    message : err.message,
    error : err
  }, function(error, data){
    res.writeHead(err.status, { "Content-Type": "text/html;charset=utf-8" });
    res.end(data);
  });

});

module.exports = app;

