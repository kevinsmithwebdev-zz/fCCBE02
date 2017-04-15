var net = require('net')  
var port = process.argv[2];

var server = net.createServer(function createSocket(socket) {
    var date = new Date();
    
    function leadZ(num) {
      return ((num >= 10) ? "" : "0") + num.toString();
    }

    var timeStr = date.getFullYear() + '-' +
        leadZ(date.getMonth()+1) + '-' +
        leadZ(date.getDate()) + ' ' +
        leadZ(date.getHours()) + ':' +
        leadZ(date.getMinutes()) + '\n';
        
    socket.write(timeStr);
    socket.end();
});

server.listen(port);