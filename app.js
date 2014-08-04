
//////////////////////
/// Dependencies
//////////////////////

var logger   = require('koa-logger'),
    koa      = require('koa'),
    app      = koa(),
    server   = require('http').Server(app.callback()),
    socketio = require('socket.io')(server);

//////////////////////
/// Middleware
//////////////////////

app.use(logger());

//////////////////////
/// Socket IO
//////////////////////

socketio.on('connection', function(socket) {
  console.log('Socket.io started')
});

//////////////////////
/// Server
//////////////////////

server.listen(3000);
console.log('Server listening on port 3000');
