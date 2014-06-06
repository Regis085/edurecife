jQuery("document").ready(function ($) {

    var nav = $('.nav-original');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 89) {
            nav.addClass("nav-flutua");
        } else {
            nav.removeClass("nav-flutua");
        }
    });

});