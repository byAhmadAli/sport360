$(document).ready(function () {
    $("#sidebar").stick_in_parent({
        offset_top: $("#masthead").height()
    });
    ao = "";
    ai = "";
    if ($(window).width() < 960) {
        ao = "slideOutUp";
        ai = "slideInUp";
    }
    $('.results.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        animateOut: ao,
        animateIn: ai,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
    if ($(window).width() < 960) {
        $(".owl-prev").css({
            display: "none"
        });
    }
});