'use strict';

var server = require("server");

server.get("Show", function (req, res, next) {

    var asset = dw.content.ContentMgr.getContent("renderingAsset");

    res.render("service/rendering",{assetID : asset.ID});
    next();

});

module.exports = server.exports();


