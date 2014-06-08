jQuery("document").ready(function ($) {

    var container = $('.nav-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 89) {
            container.addClass("flutuar");
        } else {
            container.removeClass("flutuar");
        }
    });

});