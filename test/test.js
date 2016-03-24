process.env.NODE_ENV = 'test';
const assert = require('assert');
var leftPadIOSDK  = require('../index.js');
var leftPad = require('left-pad');
it('should produce identical output as left-pad, validating the SDK and left-pad.io', function() {
    return leftPadIOSDK.leftPad('dog', 10, '#').then(function(response) {
        SDK = JSON.parse(response).str;
        LOCAL = leftPad('dog', 10, '#') 
        assert.equal(LOCAL, SDK)
    })
})

it('should not produce identical output as left-pad, validating the SDK and left-pad.io given bad data', function() {
    return leftPadIOSDK.leftPad('sdog', 10, '#').then(function(response) {
        SDK = JSON.parse(response).str;
        LOCAL = leftPad('dog', 10, '#') 
        assert.notEqual(LOCAL, SDK)
    })
})