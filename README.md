ANSI COLOR TABLE
================
Tables for cli/stdout supporting colors using [ansi](https://github.com/TooTallNate/ansi.js) npm module.
Based on [text-table](https://github.com/substack/text-table) but using ansi cursor, not color codes.

[![Build Status](https://travis-ci.org/quimcalpe/reusable-templates.png)](https://travis-ci.org/quimcalpe/ansi-color-table)

###Examples
**Table with colors and default options**
```javascript
var table = require('ansi-color-table');

var data = [
  [ "Username".blue().underline(), "Email".blue().underline(), "active".blue().underline() ],
  [ "john.smith", "john@gimail.com".yellow(), "yes".green() ],
  [ "steve.balmes", "sbalmes@hotma.il".yellow(), "yes".green() ],
  [ "james.durango", "james.durango@greenvine.com".yellow(), "no".red() ],
  [ "elisa.polite", "epolite@".yellow(), "yes".green() ]
];

table(data);
```
**Custom align, custom separator, centered header**
```javascript
var table = require('../');

var data = [
  [ "Username".blue().underline(), "Email".blue().underline(), "Age".blue().underline(), "Active".blue().underline() ],
  [ "john.smith", "john@gimail.com".yellow(), "9".white(), "yes".green() ],
  [ "steve.balmes", "sbalmes@hotma.il".yellow(), "19".white(), "yes".green() ],
  [ "james.durango", "james.durango@greenvine.com".yellow(), "99".white(), "no".red() ],
  [ "elisa.polite", "epolite@".yellow(), "109".white(), "yes".green() ]
];

table(data, {
  align : [ "left", "left", "right", "center" ],
  separator : " | ",
  headerAlign: "center"
});
```
**Redirect output to custom stream instead of `process.stdout`**
```javascript
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
```
### Installation
With [npm](https://npmjs.org) do:
```bash
$ npm install ansi-color-table
```

### Testing
```bash
$ npm test
```

### License
MIT