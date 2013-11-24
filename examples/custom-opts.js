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
