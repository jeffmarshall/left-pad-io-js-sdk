'use strict';

var Promise = require('Promise');
var request = require('request');

module.exports = (str, len, ch) => {
  return new Promise((resolve, reject) => {
    let url = [
      'https://api.left-pad.io/?str=',
      encodeURIComponent(str),
      '&len=',
      encodeURIComponent(len),
      '&ch=',
      encodeURIComponent(ch)
    ].join('');

    request(url, (error, response, body) => {
      try {
        var parsedBody = JSON.parse(body);
      } catch(e) {
        var parsedBody = body;
      };

      if (error) return reject(error);
      if (parsedBody.hasOwnProperty('errorMessage')){
        return reject(body);
      }

      return resolve(body);
    });
  })
}
