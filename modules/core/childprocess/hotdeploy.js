// node hotdeploy.js staticServer02.js 8080
// -> staticServer02.js 8080
var childProcess = require("child_process");
var path = require("path");

var child;
var argv = process.argv.slice(3);
var file = path.join("..", "..", "..", "server", "http", process.argv[2]);

function runChild(){
  child = childProcess.fork(file, argv);
  console.log("runing node", process.argv[2], argv);
  child.on("close", function(){
    console.log("stop", process.argv[2]);
  });
}

var fs = require("fs");
fs.watchFile(file, function(curr, prev){
  if ( child ) child.kill();
  setTimeout(runChild, 1000);
});

runChild();
