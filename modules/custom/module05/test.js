var m1 = require("./m1");
console.log(typeof m1, m1.name, m1.type);

var m2 = require("./m2");
console.log(typeof m2);
var kim = m2("PANSUK", 32);
var lee = m2("Lee", 25);
var hong = require("./m2")("hong", 40);
console.log(hong.name, hong.age);
console.log(require("./m2") == m2);

var m3 = require("./m3");
var score1 = m3({ kor : 10, eng : 10 });
var score2 = m3({ kor : 90, eng : 10 });
var score3 = require("./m3")({kor : 50, eng : 30 });
console.log(score1.sum(), score1.avg());
console.log(score2.sum(), score2.avg());
console.log(score3.sum(), score3.avg());

var m4 = require("./m4");
m4.createServer(function(){});
m4.readFile("hello.html", function(){});
m4.parse("http://localhost:1234/index.html?name=kim&age=32");


require("http").createServer(function(){});
require("fs").readFile("hello.html", function(){});
require("url").parse("http://localhost:1234/index.html?name=kim&age=32");

