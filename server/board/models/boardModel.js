// var b1 = {
// 		_id: 1,
// 		title: '첫번째 게시물',
// 		writer: '김철수',
// 		content: '첫번째 게시물 입니다.',
// 		view: 0,
// 		regdate: '2019-06-20 12:34'
// };
// var b2 = {
// 		_id: 2,
// 		title: '두번째 게시물',
// 		writer: '이영희',
// 		content: '두번째 게시물 입니다.',
// 		view: 0,
// 		regdate: '2019-06-21 12:54'
// };

// var list = [b1, b2];

// var db = {};
// db.board = {
// 	find : function(query, callback){
// 		// 비동기적으로 DB 조회
// 		console.log("22222", query);
// 		callback(null, list);
// 	}
// }

var mongoClient = require("mongodb").mongoClient;
var db;
mongoClient.connect("mongodb://localhost:27017/board", {}, function(err, boardDb){});

module.exports = {
	list : function(cb){
		// DB 호출 작업
		console.log("11111");
		
		db.board.find("select", function(err, result){
			cb(result);
		});		
	},
	show : function(no, cb){
		cb(list[no-1]);
	},
	create : function(board, cb){
		cb(3);
	},
	remove : function(no, cb){
		cb();
	}
}