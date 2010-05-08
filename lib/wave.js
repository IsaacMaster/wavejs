var Model = exports.Model = require("wave/model");
var Federation = exports.Federation = require("wave/federation");

var currentFederation = new Federation();

exports.getListOfWaves = function() {
    return Model.createDocuments(currentFederation.loadData());
};