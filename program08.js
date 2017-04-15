var http = require('http');
var bl = require('bl');
var count = 0;
var results = [];

var urlStrs = [process.argv[2], process.argv[3], process.argv[4]];


for (var i = 0; i < 3; i++) {
  httpCall(i);
}


//******* functions

function outputResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpCall(index) {
  http.get(urlStrs[index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        results[index] = data.toString();
        count++;
        if (count === 3) {
          outputResults();
        }
      }
    }));
  });
}
