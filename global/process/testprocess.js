console.log('1. process 실행');
// console.log(process.argv);

process.on('exit', function(code){
  setTimeout(function(){
    console.log('exit 이벤트에서는 비동기 함수의 콜백은 호출 안됨');
  }, 1000);
  console.log('5. 프로세스 종료 직전에 호출. 마지막으로 처리할 작업 지정.', code);
});

try{
  // a();
} catch (err) {
  console.log(err);
}

process.stdout.write("stdout 출력\n");
process.stdin.on("data", function(data){
  process.stdout.write("읽은 데이터 : " + data);
});

setTimeout(function(){
  process.exit();
}, 500);

setTimeout(function(){
  console.log("4. 비동기 함수 실행 결과");
}, 1000);

console.log("2. process 종료");
console.log("3. 마지막 작업");