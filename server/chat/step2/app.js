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
 */

var path = require("path");
var logger = require("./middleware/logger")(path.join(__dirname, 'log.txt'));
var static = require("./middleware/static")(path.join(__dirname, 'public'));

function app(req, res){
  logger(req, res);
  static(req, res);
}

module.exports = app;

