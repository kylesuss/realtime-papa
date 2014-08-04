![Realtime Papa](http://i.imgur.com/sSknbIf.png)
 
[Image Credit](https://accounts-flickr.yahoo.com/photos/54049036@N00/2838065275)

------------

A simple plug-and-play-adapter (papa) using node.js and socket.io to add realtime functionality to an existing application through a subscription to a shared Redis instance.

Realtime papa is designed to be deployed as a standalone application that can be used in conjunction with any existing application that already uses Redis.

>This app relies on Koa, which requires node 0.11.x for the --harmony flag. More on the installation for that [here](https://github.com/koajs/koa/blob/212137139a5b786bafdbc448d5e485a0ad984349/docs/api/index.md#installation).

## Getting Started

```
$ git clone git@github.com:kylesuss/realtime-papa.git
$ cd realtime-papa
$ npm install
$ node --harmony app
```

## Subscriptions

Update your subscriptions in `app.js`

```
client.subscribe('channel');
```
