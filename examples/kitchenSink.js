var leftPadIOSDK = require('left-pad-io-sdk');

leftPadIOSDK.leftPad('cat', 999, '@').then(function(response){
  console.log(response) // logs the response to standard output
}).catch(function(error){
  console.error(error)  // outputs the error to the standard error handler
})
