'use strict';

module.exports = function(Test) {

    Test.greet = function(msg,cb) {
        cb(null, 'Greetings... '+msg);
     }
       
    Test.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        http: {path: '/greet', verb: 'get'},
        returns: {arg: 'greetings', type: 'String'}
          }
      );
};
