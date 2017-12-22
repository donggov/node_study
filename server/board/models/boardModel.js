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

var mongoClient = require("mongodb").MongoClient;
var db;
mongoClient.connect("mongodb://localhost:27017/board", {}, function(err, boardDB){
	if ( err ) {
		console.log(err);
	} else {
		db = boardDB;
		db.board = db.collection("board");
		db.seq = db.collection("seq");
		console.log("DB 접속 완료");
	}
});

module.exports = {
	list : function(cb){
		// DB 호출 작업
		db.board.find({}, {content: 0})
						.sort({_id: -1})
						.toArray(function(err, result){
							cb(result);
						});
	},
	show : function(no, cb){
		db.board.findOneAndUpdate({_id: no}, {$inc: {view: 1}}, function(err, result) {
			cb(result.value);
		});
	},
	create : function(board, cb){
		db.seq.findOneAndUpdate({}, {$inc: {seq: 1}}, function(err, result){
			board._id = result.value.seq;
			board.view = 0;
			// board.regdate = new Date();
			board.regdate = require("date-format").asString('yyyy-MM-dd hh:mm', new Date());
			db.board.insert(board, function(err, result){
				cb(board._id);
			});
		});
	},
	remove : function(no, cb){
		console.log("삭제no : "  + no);
		db.board.remove({_id: no}, function(err, result){
			cb();
		});
	}
}