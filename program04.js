
var fs = require('fs');
var path = require('path');

var dirName = process.argv[2];
var sortExt = process.argv[3];

var buffer = fs.readdir(dirName, callback);


function callback(err, list) {
    if (err) {
        console.log(err);
    } else {
        var matchList = list.filter(function(file) {
            return path.extname(file) == "." + sortExt;
        });
        for (var i = 0 ; i < matchList.length ; i++) {
            console.log(matchList[i]);
        }
    }
    
}

