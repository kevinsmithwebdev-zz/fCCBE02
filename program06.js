var http = require('http');
var https = require('https');
 
var url = process.argv[2];
 
if (url.substring(0,5) === 'https'){
  https.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    });
  });
} else {
  http.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    });
  });
}