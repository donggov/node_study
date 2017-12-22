var assert = require('assert');

var a = 10;
var board = {writer: '김철수', title: '테스트'};
var result = {title: '테스트', writer: '김철수'};


describe("aaa", function(){
  it("1.", function(){
    assert(board == result);
  });
  it("2.", function(){
    deepEqual(board, result);
  });
  it("3.", function(){
    equal(board, result);
  });
});