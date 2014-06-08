jQuery("document").ready(function ($) {

    var nav = $('.nav-original');
    var container = $('#menu-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 89) {
            nav.addClass("nav-flutua");
            container.addClass("container-flutua");
        } else {
            nav.removeClass("nav-flutua");
            container.removeClass("container-flutua");
        }
    });

});