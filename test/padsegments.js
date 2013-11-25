var test = require('tap').test;
var padSegments = require('../lib/padsegments');

test('Left align', function (t) {
  var string = "Hello World!";
  var segments = padSegments(string, 15);
  t.equal(segments.left, "");
  t.equal(segments.right, "   ");
  segments = padSegments(string, 15, "left");
  t.equal(segments.left, "");
  t.equal(segments.right, "   ");
  t.end();
});

test('Right align', function (t) {
  var string = "Hello World!";
  var segments = padSegments(string, 15, "right");
  t.equal(segments.left, "   ");
  t.equal(segments.right, "");
  t.end();
});

test('Center align', function (t) {
  var string = "Hello World!";
  var segments = padSegments(string, 15, "center");
  t.equal(segments.left, " ");
  t.equal(segments.right, "  ");
  segments = padSegments(string, 16, "center");
  t.equal(segments.left, "  ");
  t.equal(segments.right, "  ");
  t.end();
});

test('String bigger than demanded pad', function (t) {
  var string = "Hello World!";
  var segments = padSegments(string, 10);
  t.equal(segments.left, "");
  t.equal(segments.right, "");
  t.end();
});

test('Custom padChar', function (t) {
  var string = "Hello World!";
  var segments = padSegments(string, 15, "left", "*");
  t.equal(segments.left, "");
  t.equal(segments.right, "***");
  t.end();
});

test('Custom padChar discard extra-chars', function (t) {
  var string = "Hello World!";
  var segments = padSegments(string, 15, "left", "AB");
  t.equal(segments.left, "");
  t.equal(segments.right, "AAA");
  t.end();
});

