var childProcess = require("child_process");

// spawn()으로 쉘을 생성한 후 지정한 명령어를 실행
// 자식 프로세스의 출력이 완료되면 콜백 함수가 호출
childProcess.exec("dir", function(err, stdout, stderr){
  if (err) {
    console.log(err);
  }
  console.log(stdout);
});

// 쉘을 실행하지 않고 지정한 파일을 실행한다.
// 나머지는 exec()와 동일
childProcess.execFile("calc", function(err, stdout, stderr){

});

