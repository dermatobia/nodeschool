var net = require('net')
var strftime = require('strftime')
var port = process.argv[2]

var server = net.createServer(function(socket){
  now = new Date();
  strTime = strftime('%F %H:%M\n', now);
  // socket.write(strTime);
  socket.end(strTime);
  socket.on("error", function(){
    console.log("ERROR!")
  })
});

server.listen(port, function(){
  console.log('test')
});



// -------------------
//  Official Solution
// -------------------
// var net = require('net')
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
// server.listen(Number(process.argv[2]))
