var childProcess = require("child_process");

// 지정한 프로세스 실행
// childProcess.spawn("calc.exe") ;
// childProcess.spawn("notepad.exe") ;

var child = childProcess.spawn("node.exe"
                                , ["spawnchild.js"]
                                , {
                                    // 부모 프로세스의 표준 입출력 장치를 자식이 사용
                                    // stdio : "inherit"
                                    // 자식 프로세스의 표준 입출력 장치를 생성된 child_process 객체
                                    stdio : "pipe"
                                  }
                              );

// 4. 자식의 표준 출력장치로부터 메시지 받음
child.stdout.on("data", function(data){
  // 5. 부모의 표준 출력장치에 메시지 출력
  console.log("자식이 출력한 메시지 : ", data.toString());
});

// 1. 자식의 표준 입력장치로 hello 전송
child.stdin.write("Hello~~");
