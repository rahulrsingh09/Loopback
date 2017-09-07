
'use strict';

var jsSHA = require("jssha");

module.exports = function (user) {

    user.prototype.hasPassword = function(plain, fn) {
        fn = fn || utils.createPromiseCallback();
        if (this.password && plain) {
            var shaObj = new jsSHA("salt"+plain, "BYTES");
            var hash = shaObj.getHash("SHA-256", "HEX");
            
            for (var i = 0; i < 1000; i++) {
                shaObj = new jsSHA(hash, "HEX");
                hash = shaObj.getHash("SHA-256", "HEX");
            }

            if(hash.toUpperCase() == this.password){
                console.log("Match");
                fn(null, true);
            } else{ 
                fn(null, false); 
            }
            
        } else {
          fn(null, false);
        }
        return fn.promise;
      };

    user.setter.password = function (plain) {
        console.log("here");
        var shaObj = new jsSHA("salt"+plain, "BYTES");
        var hash = shaObj.getHash("SHA-256", "HEX");
        
        for (var i = 0; i < 1000; i++) {
            shaObj = new jsSHA(hash, "HEX");
            hash = shaObj.getHash("SHA-256", "HEX");
        }

        console.log(hash.toUpperCase());
        this.$password = hash.toUpperCase();
    };

};

//7B0259E68DF595627F45A631DEC3F6F40F9BEB25A258CE6D7A11E5DA253AB6B4
//7b0259e68df595627f45a631dec3f6f40f9beb25a258ce6d7a11e5da253ab6b4
//4edf07edc95b2fdcbcaf2378fd12d8ac212c2aa6e326c59c3e629be3039d6432


