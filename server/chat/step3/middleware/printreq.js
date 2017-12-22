function print(type){
  return function(req, res, next){
    // connect 미들웨어 만드는 방법
    // 1. req, res, next(다음 미들웨어)를 전달받는다.
    // 2. 다음 둘 중 하나를 해야한다.
    //   1) 클라이언트에 응답 전송
    //   2) 다음 미들웨어 호출
    console.log("====================", type, "====================");
    console.log("headers", req.headers);
    console.log("cookies", req.cookies);
    console.log("session", req.session);
    console.log("==================================================");
    next();
  };
}

module.exports = print;

