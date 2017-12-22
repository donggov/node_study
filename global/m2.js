a = 10;         // 전역 변수
window.b = 20;  // 전역 변수
var c = 30;     // 모듈 변수

function d() {
  console.log(a, b, c);
  console.log(window.a, window.b, window.c);
}

d();
