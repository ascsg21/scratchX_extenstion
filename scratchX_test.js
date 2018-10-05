

var str ='';

function googleVisionAPI(imgPath) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  client
    .labelDetection(imgPath)
    .then(results => {
      const labels = results[0].labelAnnotations;

      for(var i=0; i < labels.length; i++) {
        str = str + ', ' + label.description;
      }

      return str;
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.getImageDescription = function(imgPath) {
      googleVisionAPI(imgPath);
      return str;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', 'image path : %s', 'getImageDescription', ''],
        ],
        displayName: 'google Vision API Block'
    };

    // Register the extension
    ScratchExtensions.register('google Vision API sample', descriptor, ext);
})({});
