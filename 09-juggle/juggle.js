var http = require('http');
var concat = require("concat-stream");

var numFiles = process.argv.length-2;

var fileArr = [];

for (var i = 0; i < numFiles; i++) {
    fileArr[i] = process.argv[i+2];
}


var bufferArr = [];
var bufferCount = 0;


for (var i = 0; i < fileArr.length; i++) {
    httpCall(i);
    
}
//*************/

function output() {
    for (var i = 0; i < fileArr.length; i++) {
        console.log(bufferArr[i]);
    }
}


function httpCall(index) {
    http.get(fileArr[index], function(response) {
        response.setEncoding('utf8');
        response.on('error', function(err) {
            return console.log(err);
        });
    
        var concatBuffer = concat(function(buffer) {
            bufferCount++;
            bufferArr[index] = buffer;
            if (bufferCount == fileArr.length) 
                output();
         });
        response.pipe(concatBuffer);
    });
}