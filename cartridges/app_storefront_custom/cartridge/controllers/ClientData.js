"use strict";
var server = require("server");
server.get("Pay", function(req, res, next) {

    var Resource = require("dw/web/Resource");

    var addressForm = server.forms.getForm("clientdataform");
    addressForm.clear();
    var currentYear = new Date().getFullYear();
    var creditCardExpirationYears = [];
    for (var j = 0; j < 10; j++) {
        creditCardExpirationYears.push(currentYear + j);
    }
    res.render("clientdata", {
        exPhone:Resource.msg("example.phone", "forms", null),
        exPostalCode:Resource.msg("example.postalcode", "forms", null),
        titleShipping:Resource.msg("shipping.form.title", "forms", null),
        titlePayment:Resource.msg("payment.form.title", "forms", null),
        addressForm: addressForm,
        expirationYears: creditCardExpirationYears,
    });
    next();
});
module.exports = server.exports();