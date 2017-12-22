var http = require('http');
var fs = require('fs');
var path = require('path');

// var home = path.join(__dirname, '..', 'global');
var home = __dirname;

http.createServer(function(req, res){
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write('<h1>Hello Node Server</h1>')
  // res.end();

  var file = req.url.substring(1);
  /*
  try {
    var data = fs.readFileSync(file);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  } catch(err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(err.toString());
  }
  */

  // 비동기 방식
  fs.readFile(path.join(home, file), function(err, data){
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(err.toString());
      // res.end('<h1>Not Found.</h1>');
    } else {
      // console.log(data.toString());
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });

}).listen(1234);



