$(document).ready(function () {
    $('.slider').click(function () {
        $('.slider-wrapper').slideToggle();
    });

    $(window).resize(function () {
        if ($(window).width() >= 896) {
            $('.slider-wrapper').hide();
        }
    });
});