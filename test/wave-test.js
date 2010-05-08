var WaveJS = require("../lib/wave.js").Wave;
var ASSERT = require("test/assert");

exports.testThatWaveJSInitializes = function() {
    var aWaveJS = new WaveJS(null, null, null);
    ASSERT.isFalse(null === aWaveJS);
};

if (require.main === module)
    require("os").exit(require("test/runner").run(exports));