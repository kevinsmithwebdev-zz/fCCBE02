var fs = require("fs");

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, data) {
    if (err)
        return console.error(err);
    
    var regexTest = new RegExp('.+\.' + ext + '$');
    
    data.filter(function(d) {
        return regexTest.test(d);
    })
    .forEach(function(d) {
       console.log(d);
    });

});