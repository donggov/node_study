var express = require('express');
var router = express.Router();
var controller = require("../controllers/boardController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/board");
});

router.get('/board', function(req, res, next) {
  controller.list(req, res);
});

router.get('/board/new', function(req, res, next) {
  controller.form(req, res);
});

router.post('/board/new', function(req, res, next) {
  controller.create(req, res);
});

router.get('/board/:no', function(req, res, next) {
  controller.show(req, res);
});

router.delete('/board/:no', function(req, res, next) {
  controller.remove(req, res);
});

module.exports = router;
