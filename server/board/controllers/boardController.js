var express = require('express');
var router = express.Router();
var model = require("../models/boardModel");

module.exports.list = function(req, res, next) {
  model.list(function(result){
    res.render('board/list', { title: '목록', list: result });
  });
};

module.exports.form = function(req, res, next) {
  res.render('board/write', { title: '등록' });
};

module.exports.create = function(req, res, next) {
  var board = req.body;
  model.create(board, function(no){
    res.render('board/result', { title: '등록 결과', no: no });
  });
};

module.exports.show = function(req, res, next) {
  var no = req.params.no;
  model.show(parseInt(no), function(board){
    res.render('board/view', { title: '조회', board: board });
  });
};

module.exports.remove = function(req, res, next) {
  var no = req.params.no;
  model.remove(parseInt(no), function(){
    res.redirect("/");
  });
};

// module.exports = router;
