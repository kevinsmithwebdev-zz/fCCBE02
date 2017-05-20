var fs = require("fs");

module.exports = function(dirName, extName, callback) {
    fs.readdir(dirName, function(err, data) {
        if (err) {
            return callback(err);
        }
        var regexTest = new RegExp('.+\.' + extName + '$');
        
        data = data.filter(function(d) {
            return regexTest.test(d);
        });
        callback(null, data);
    });
};