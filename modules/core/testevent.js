var EventEmitter = require("events");

var event = new EventEmitter();
event.on("myevent", print);
event.addListener("myevent", print);
event.once("myevent", print);

var count = 0;
event.emit("myevent", ++count);
event.emit("myevent", ++count);

function print(msg){
  console.log(msg);
}