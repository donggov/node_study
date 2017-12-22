var path = require("path");
var filename = path.basename(__filename);

console.log(filename, "실행");

process.on("message", function(msg){
  console.log(msg);
});
process.send("hi parent");


process.on("exit", function(code){
  console.log(filename, "종료", code);
});
