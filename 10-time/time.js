 var net = require('net');
 
 var port = process.argv[2] || process.env.port;
 var IP = process.env.IP;
 
 console.log("listening on port " + port + "...");
 var server = net.createServer(function (socket) {  
    var date = new Date();
    
    function leadingZero(num) {
      return ((num >= 10) ? "" : "0") + num.toString();
    }

    var timeStr = date.getFullYear() + '-' +
        leadingZero(date.getMonth()+1) + '-' +
        leadingZero(date.getDate()) + ' ' +
        leadingZero(date.getHours()) + ':' +
        leadingZero(date.getMinutes()) + '\n';
        
    socket.end(timeStr);
 });
 
server.listen(port, IP);