var express = require('express');
var app = express();
var socket = require('socket.io');

var server = app.listen(process.env.PORT, () => {
  console.log("listenig");
});


//satic server
app.use(express.static('public'));

//socket
var io = socket(server);
io.on('connection', (socket) => {

  console.log("connection made on socket:" ,socket.id);

  socket.on('chatMsg',(data) =>{
    io.sockets.emit('chatMsg',data);
  });

  socket.on('typing' ,(data) => {
    socket.broadcast.emit('typing',data);
  });

});
