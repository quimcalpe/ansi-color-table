var table = require('../');
var Stream = require('stream');

var tableData = [
  [ "Username".blue().underline(), "Email".blue().underline(), "active".blue().underline() ],
  [ "john.smith", "john@gimail.com".yellow(), "yes".green() ],
  [ "steve.balmes", "sbalmes@hotma.il".yellow(), "yes".green() ]
];

var output_stream = new Stream();
var output_data = "";
output_stream.write = function (data) {
  output_data += data;
};
output_stream.end = function () {
  // do something with data
  console.log(output_data);
};

table(tableData, {}, output_stream);

