window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});

$(document).ready(function(){
    $(".click-promo").on("click", function(){
        $("#enter-promo").show();
        $("#click-promo-id").hide();
    })
})