# Drivers for JavaScript Gremlin Language library

This module contains additional drivers for [official gremlin library](https://www.npmjs.com/package/gremlin)


Implemented drivers:

|  Name  |  Description  |
|--------|---------------|
| WsJsDriverRemoteConnection  |  Websocket connection for Web applications  |

### How to use it

Install package using npm
```shell script
npm install gremlin-js-driver --save
```
or yarn

```shell script
yarn add gremlin-js-driver
```

Use it in your application:

```javascript
const gremlin = require('gremlin');
const gremlin_drivers = require('gremlin-js-driver');
const traversal = gremlin.process.AnonymousTraversalSource.traversal;

const WsJsDriverRemoteConnection = gremlin_drivers.WsJsDriverRemoteConnection;
 
const g = traversal().withRemote(new WsJsDriverRemoteConnection('ws://localhost:8182/gremlin'));
```
Please see the [documentation for `gremlin` library](https://www.npmjs.com/package/gremlin) for more information.