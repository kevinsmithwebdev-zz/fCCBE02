var worker = require("./module");

var callback = function(err, data) {
    if (err)
        console.error(err);
        
    data.forEach(function(d) {
        console.log(d);
    });
};

worker(process.argv[2], process.argv[3], callback);