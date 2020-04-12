//-------------- Pure Node Server ----------------------------
var http = require('http'),
fs = require('fs');
http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);
}).listen(1337);
console.log('visit me at http://localhost:1337');

//------------------- Node with Express --------------------------
var http = require('http'),
fs = require('fs');
http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);
}).listen(1337);
console.log('visit me at http://localhost:1337');
