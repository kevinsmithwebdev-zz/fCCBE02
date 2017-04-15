
var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            var matchList = list.filter(function(file) {
                return path.extname(file) == "." + filter;
            });
            return callback(null, matchList);

        }
    });  
};


        

