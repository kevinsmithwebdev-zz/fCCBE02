
var fs = require('fs');

var filename = process.argv[2];

var buffer = fs.readFileSync(filename);

var lines = buffer.toString();

console.log(lines.split('\n').length - 1);