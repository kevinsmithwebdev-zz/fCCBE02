var http = require('http');
var fs = require('fs');
var map = require('through2-map'); 

var port = process.argv[2];

var server = http.createServer(function (request, result) { 
    result.writeHead(200, { 'content-type': 'text/plain' });
    request.pipe(map(function (chunk) {  
        return chunk.toString().toUpperCase();
    })).pipe(result);
});

server.listen(Number(port));
