$(document).ready(function () {
    $("#sidebar").stick_in_parent({
        offset_top: $("#masthead").height()
    });
    var url = window.location.href.includes("/en");
    $('.results.owl-carousel').owlCarousel({
        rtl: !url,
        loop: true,
        autoplay: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
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
        rtl: !url,
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
    if (url) {
        $(".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
        $(".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
    } else {
        $(".owl-prev").html('<i class="fa fa-chevron-right fa-2x"></i>');
        $(".owl-next").html('<i class="fa fa-chevron-left fa-2x"></i>');
    }
    if ($(window).width() < 960) {
        $(".matchdetils").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
    }
    var flag = false;
    $("#toogle-details-down").click(function () {
        $(".up").css("display", "block");
        $(".down").css("display", "none");
        $(".results.owl-carousel .owl-stage-outer").css("height", "195px");
        $(".matchdetils").slideToggle();
    });
    $("#toogle-details-up").click(function () {
        $(".up").css("display", "none");
        $(".down").css("display", "block");
        $(".results.owl-carousel .owl-stage-outer").css("height", "130px");
        $(".matchdetils").slideToggle();
    });
});