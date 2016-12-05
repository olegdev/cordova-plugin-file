(function() {

    var exec = require('cordova/exec');

    var setImageUrl = function(imageUrl) {
        exec(function() {}, function() {}, "File", "setImageUrl", [imageUrl]);
    };

    module.exports = setImageUrl;
})();
