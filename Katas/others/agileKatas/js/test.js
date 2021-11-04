let {BingoCards} = require('./bingo')
let assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      column = [
        [ 1, 2, 3, 4, 5 ],
        [ 11, 22, 33, 44, 55 ],
        [ 21, 12, 23, 34, 45 ],
        [ 9, 8, 7, 6, 1 ],
        [ 1, 2, 32, 45, 51]
      ];
      assert.equal(column, (new BingoCards(column)).columns);
    });
  });
});