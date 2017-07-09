var http = require('http');

// use port 4000 unless there exists a preconfigured port
var port = process.env.PORT || 4000;

http.createServer(function (req, res) {

// set headers to enable CORS
res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.indexOf('/api') === 0) {
      return require('./api/http-get')(req, res);
    }

}).listen(port);

console.log('Listening on http://localhost:%d', port);
