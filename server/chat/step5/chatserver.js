function chat(io) {
  io.on("connection", function(s){
    console.log("접속", s.client.conn.remoteAddress);

    s.on("disconnect", function(){
      console.log("접속 종료", s.client.conn.remoteAddress);
    });

    s.on("login", function(nickname){
      s.nickname = nickname;
      io.emit("chat", `시스템 : ${nickname}님이 입장하였습니다.`);
    });

    s.on("chat", function(msg){
      if ( msg.trim() == "" ) {
        io.emit("chat", `시스템 메세지를 입력하세요.`);
      } else {
        io.emit("chat", `${s.nickname}: ${msg}`);
      }
    });
  });
}

module.exports = chat;
