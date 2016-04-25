left-pad-io-js-sdk
===============================================================================

A robust javascript SDK for the [left-pad.io](http://left-pad.io) API.


Requirements
-------------------------------------------------------------------------------

- Node.js


Installation
-------------------------------------------------------------------------------

```bash
$ npm install left-pad-io-js-sdk
```


Usage
-------------------------------------------------------------------------------

```javascript
var leftPadIOSDK = require('left-pad-io-sdk');

leftPadIOSDK.leftPad('dog', 10, '#').then(function(response){
  console.log(response); // logs the response
})
```

See `/examples` for more

Contributing
-------------------------------------------------------------------------------

Go for it


Lisence
-------------------------------------------------------------------------------

APACHE 500-series S
