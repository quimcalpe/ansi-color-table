var table = require('../');

var data = [
  [ "Username".blue().underline(), "Email".blue().underline(), "active".blue().underline() ],
  [ "john.smith", "john@gimail.com".yellow(), "yes".green() ],
  [ "steve.balmes", "sbalmes@hotma.il".yellow(), "yes".green() ],
  [ "james.durango", "james.durango@greenvine.com".yellow(), "no".red() ],
  [ "elisa.polite", "epolite@".yellow(), "yes".green() ]
];

table(data);
