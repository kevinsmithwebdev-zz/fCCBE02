
var fs = require('fs');

var fileName = process.argv[2];

var buffer = fs.readFile(fileName, callback);


function callback(err, data) {
    if (err) {
        console.log("Error!");
    } else {
        var lines = data.toString();

        console.log(lines.split('\n').length - 1);
    }
    
}

