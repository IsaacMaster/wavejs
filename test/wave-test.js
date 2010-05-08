var Wave = require("../lib/wave.js");
var ASSERT = require("test/assert");

exports.testThatTrueIsTrue = function() {
    ASSERT.isTrue(true);
}

if (require.main === module)
    require("os").exit(require("test/runner").run(exports));