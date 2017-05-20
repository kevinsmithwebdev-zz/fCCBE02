var fs = require('fs');

var newLineFile = fs.readFileSync(process.argv[2], 'utf8');

console.log(newLineFile.match(/\n/g).length);