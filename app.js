
//////////////////////
/// Dependencies
//////////////////////

var logger   = require('koa-logger'),
    koa      = require('koa'),
    app      = koa(),
    redis    = require('redis'),
    client   = redis.createClient(6379, '127.0.0.1'),
    server   = require('http').Server(app.callback()),
    io       = require('socket.io')(server);

//////////////////////
/// Middleware
//////////////////////

app.use(logger());

//////////////////////
/// Redis
//////////////////////

client.subscribe('channel');

client.on('message', function(channel, message) {
  console.log(channel);
  console.log(message);
});

client.on('error', function(error) {
  console.log(error);
});

//////////////////////
/// Socket IO
//////////////////////

io.on('connection', function(socket) {
  socket.emit('status', 'socket.io initialized');
});

//////////////////////
/// Server
//////////////////////

server.listen(3000);
console.log('Server listening on port 3000');

