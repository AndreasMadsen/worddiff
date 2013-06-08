
var test = require('tap').test;
var worddiff = require('./worddiff.js');

test('all match', function (t) {
  var diff = worddiff('hallo world', 'hallo world');
  t.equal(diff, 0);
  t.end();
});

test('left has extra', function (t) {
  var diff = worddiff('hallo world extra', 'hallo world');
  t.equal(diff, 1);
  t.end();
});

test('right has extra', function (t) {
  var diff = worddiff('hallo world', 'hallo world extra');
  t.equal(diff, 1);
  t.end();
});

test('left is empty', function (t) {
  var diff = worddiff('', 'hallo world');
  t.equal(diff, 2);
  t.end();
});

test('right is empty', function (t) {
  var diff = worddiff('hallo world', '');
  t.equal(diff, 2);
  t.end();
});

test('extra space do not matter', function (t) {
  var diff = worddiff('  hallo  \t\r \n  world', 'hallo world  ');
  t.equal(diff, 0);
  t.end();
});

test('word arrays works too', function (t) {
  var diff = worddiff(['hallo', 'world'], ['hallo', 'world']);
  t.equal(diff, 0);
  t.end();
});