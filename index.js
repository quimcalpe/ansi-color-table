var ansi = require("ansi");
var padSegments = require("./lib/padsegments");

var colors = [
  "white",
  "black",
  "blue",
  "cyan",
  "green",
  "magenta",
  "red",
  "yellow",
  "grey",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];
var styles = [
  "bold",
  "italic",
  "underline",
  "inverse"
];

colors.forEach(function (color) {
  String.prototype[color] = function () {
    this._color = color;
    return this;
  };
});
styles.forEach(function (style) {
  String.prototype[style] = function () {
    if ( !this._styles ) this._styles = [];
    this._styles.push(style);
    return this;
  };
});

function printTable(table, opts, stream) {
  opts = opts || { align : [] };
  if ( opts.align === undefined ) opts.align = [];
  // compute row length
  if ( table.length === 0 ) return;
  // output stream
  stream = stream || process.stdout;
  var cursor = ansi(stream);
  var numCols = table.reduce(function (maxCols, col) {
    return ( col.length > maxCols ) ? col.length : maxCols;
  }, 0);
  var maxColumnLengths = Array(numCols);
  for ( var i = 0; i < numCols; i++ ) maxColumnLengths[i] = 0;
  table.map(function (row) {
    var i = 0;
    for ( ; i < numCols; i++ ) {
      if ( row[i] !== undefined && row[i].length > maxColumnLengths[i] ) {
        maxColumnLengths[i] = row[i].length;
      }
    }
  });

  // print table
  var output = [];
  var segments;
  table.forEach(function (row, indexRow) {
    row.forEach(function (col, indexCol) {
      var align = ( opts.headerAlign && indexRow === 0 ) ? opts.headerAlign : opts.align[indexCol];
      segments = padSegments(col.toString(), maxColumnLengths[indexCol], align);
      stream.write(segments.left);
      if ( col._color ) {
        cursor[col._color]();
      }
      if ( col._styles ) {
        col._styles.forEach( function (style) {
          cursor[style]();
        });
      }
      stream.write(col.toString());
      cursor.reset();
      stream.write(segments.right);
      if ( indexCol < row.length-1 ) stream.write(opts.separator || "  ");
    });
    stream.write("\n");
  });
  if ( stream != process.stdout ) stream.end();
}

module.exports = exports = printTable;