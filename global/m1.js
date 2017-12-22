a = 10;         // 전역 변수
global.b = 20;  // 전역 변수
var c = 30;     // 모듈 변수

function d() {
  console.log(a, b, c);
  console.log(global.a, global.b, global.c);
}

d();