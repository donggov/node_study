require("net").createServer(function(s){
  s.on("error", function(err){});
  s.pipe(s).pipe(process.stdout);
}).listen(1234);

