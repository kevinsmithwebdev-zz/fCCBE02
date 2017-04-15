var http = require('http');
var https = require('https');
var bl = require('bl');
 
var url = process.argv[2];
 
http.get(url, function (response) {
  response.pipe(bl(function (err, data) { 
    if (err) {
      console.log(err);
    } else {
      var dataStr = data.toString();
      console.log(dataStr.length);
      console.log(dataStr);
    }
  }));
});
 
 
 
/*
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
} */