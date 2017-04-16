var http = require('http');
var fs = require('fs');

var file = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function (request, result) { 
    result.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(file).pipe(result);
});

server.listen(Number(port));