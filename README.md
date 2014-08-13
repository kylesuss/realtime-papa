![Realtime Papa](http://i.imgur.com/h1FNhq9.png)
 
A simple plug-and-play-application (papa) using node.js and socket.io to add realtime functionality to an existing application through a subscription to a shared Redis instance.

Realtime papa is designed to be deployed as a standalone application that can be used in conjunction with any existing application that already uses Redis.

>This app relies on Koa, which requires node 0.11.x for the --harmony flag. More on the installation for that [here](https://github.com/koajs/koa/blob/212137139a5b786bafdbc448d5e485a0ad984349/docs/api/index.md#installation).

## Getting Started

```
$ git clone git@github.com:kylesuss/realtime-papa.git
$ cd realtime-papa
$ npm install
$ node --harmony app
```

## Redis Connection

By default, the Redis connection assumes that Redis is running locally on port 6379. To change this setting, simply update the require statement in `app.js`

```javascript
var redis  = require('redis'),
    client = redis.createClient(6379, '127.0.0.1');
```

## Subscriptions

Add channel subscriptions inside `channels.js`. Channels are looped through inside `app.js` and a subscription is made to each individually.

## Authentication

If your Redis instance requires authentication, you'll need to add an auth method inside `app.js` in order to connect.

```javascript
client.auth('YOURPASSWORD', function() {
  console.log('Connected to Redis');
});
```

More on that [here](https://github.com/mranney/node_redis#clientauthpassword-callback).

## Socket Emit

Right now, when the app receives an message from Redis, a message is sent to all connected sockets. For more advanced functionality, consider implementing a room or namespace so that you can specify which clients receive specific messages ([docs](http://socket.io/docs/rooms-and-namespaces/)).