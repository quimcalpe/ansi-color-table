var test = require('tap').test;
var table = require('../');
var Stream = require('stream');
var tableData = [
  [ "Username".blue().underline(), "Email".blue().underline(), "active".blue().underline() ],
  [ "john.smith", "john@gimail.com".yellow(), "yes".green() ],
  [ "steve.balmes", "sbalmes@hotma.il".yellow(), "yes".green() ],
  [ "james.durango", "james.durango@greenvine.com".yellow(), "no".red() ],
  [ "elisa.polite", "epolite@1234.com".yellow(), "yes".green() ]
];

test('Read content from random cells', function (t) {
  t.plan(2);
  var output = new Stream();
  output.writable = true;
  output.write = function (data) {
    console.log("write"+data);
    if ( data == tableData[0][0] && data == "Username" ) {
      t.pass();
    }
    if ( data == tableData[4][1] && data == "epolite@1234.com" ) {
      t.pass();
    }
  };
  table(tableData, {}, output);
});

