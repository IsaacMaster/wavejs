var Model = exports.Model = require("./wave/model");
var Federation = exports.Federation = require("./wave/federation");
var Server = exports.Server = require("./wave/server");
var Communication = exports.Communication = require("./wave/communication");

var Wave = exports.Wave = function(server, federation, communication) {
    this.server = server;
    this.federation = federation;
    this.communication = communication;
}