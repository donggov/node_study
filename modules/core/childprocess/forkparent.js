var childProcess = require("child_process");

// childProcess.spawn("node", ["forkchild.js"], { stdio : "inherit" });

// node 프로세스를 실행한다.
// 자식 프로세스와 통신하는 전용 IPC 채널을 만든다.
var child = childProcess.fork("forkchild.js");

child.send("hello child");
child.on("message", function(msg){
  console.log(msg);
  child.kill();
});

process.on("exit", function(code){
  // console.log(filename, "종료", code);
  console.log("eeeeee");
});