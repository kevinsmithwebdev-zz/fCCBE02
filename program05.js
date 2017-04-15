
var dirName = process.argv[2];
var sortExt = process.argv[3];

var mymodule = require('./mymodule5.js');

mymodule(dirName, sortExt, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(function (file) {
            console.log(file);
        });
    }
});

