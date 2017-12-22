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
var logger = require("./middleware/logger");
var static = require("./middleware/static");
var printreq = require("./middleware/printreq");

var app = connect();

app.use(printreq("before"))
app.use(logger(path.join(__dirname, 'log.txt')));
app.use(static(path.join(__dirname, 'public')));


// 404 에러 처리 미들웨어
app.use(function(req, res, next){
  res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
  res.end("<h1>" + req.url + "파일을 찾을 수 없습니다.</h1>");
});

module.exports = app;

