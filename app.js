
//////////////////////
/// Dependencies
//////////////////////

var logger   = require('koa-logger'),
    koa      = require('koa'),
    app      = koa(),
    _        = require('underscore'),
    channels = require('./channels'),
    server   = require('http').Server(app.callback()),
    io       = require('socket.io')(server),
    redis    = require('redis'),
    client   = redis.createClient(6379, '127.0.0.1');

//////////////////////
/// Middleware
//////////////////////

app.use(logger());

//////////////////////
/// Redis
//////////////////////

_.each(channels.list, function(channel, index, list) {
  client.subscribe(channel);
});

client.on('message', function(channel, message) {
  io.sockets.emit(channel, message);
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
  console.log('socket.io initialized');
  socket.emit('status', 'socket.io initialized');
});

//////////////////////
/// Server
//////////////////////

server.listen(3000);
console.log('Server listening on port 3000');

