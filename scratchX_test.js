(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.getImageDescription = function(imgPath) {
        return ''
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', '%s', 'getImageDescription', ''],
        ],
        displayName: 'google Vision API Block'
    };

    // Register the extension
    ScratchExtensions.register('google Vision API sample', descriptor, ext);
})({});
