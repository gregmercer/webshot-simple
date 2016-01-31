var webshot = require('webshot');

var options = {
  siteType: 'file',
  phantomPath: require('phantomjs2').path,
  defaultWhiteBackground: true,
  userAgent: 'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3',
  //timeout: 4000,
  phantomConfig: {
    "ignore-ssl-errors": "true",
    "ssl-protocol": "any"
  },
  settings: {
    resourceTimeout: 60000
  },
  renderDelay: 4000
};

webshot('simple.html', 'simple.png', options, function(err) {
  // screenshot now saved to chess-board.png
});
