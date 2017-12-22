var url = require("url");
var fs = require("fs");
var path = require("path");
var views = path.join(__dirname, "..", "views");
var ejs = require("ejs");

function chat(req, res, next) {
  // 대화명 추출
  // var nickname = url.parse(req.url, true).query.nickname;
  var nickname = req.session.nickname;

  if ( nickname ) {
    var filename = path.join(views, "chat.ejs");
    // fs.readFile(filename, function(err, data){
    //   res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    //   data = data.toString().replace("<%=nickname%>", nickname);
    //   res.end(data);
    // });

    ejs.renderFile(filename, {
      nickname : nickname,
      title : "채팅방 타이틀~~"
    }, function(err, data){
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.end(data);
    });

  } else {
    res.writeHead(303, { "Location" : "/" });
    res.end();
  }
}


function login(req, res, next) {
  var nickname = url.parse(req.url, true).query.nickname;
  console.log(">>>>> nickname", nickname);

  if ( nickname && nickname.trim() != "" ) {
    req.session.nickname = nickname;
    res.writeHead(303, { "Location": "/chat" });

  } else {
    res.writeHead(303, { "Location": "/" });
  }
  res.end();
}


function logout(req, res, next) {
  res.writeHead(303, { "Location": "/" });
  res.end();
}


function router(req, res, next){
  var pathname = url.parse(req.url).pathname;
  switch(pathname) {
    case "/chat" :
      chat(req, res, next);
      break;
    case "/login" :
      login(req, res, next);
      break;
    case "/logout" :
      logout(req, res, next);
      break;
    default : 
      next();
      break;
  }
}

module.exports = router;
