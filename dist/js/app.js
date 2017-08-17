$(document).ready(function () {
    /*$(window).scroll(function () {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop + 200 >= $('#head').height()) {
            $('#sticky').addClass('fixed');
        } else {
            $('#sticky').removeClass('fixed');
        }

        if (distanceFromTop - 100 >= $('.secondhead').height()) {
            $('#sticky').removeClass('fixed');
        }
    });*/
    $("#sidebar").stick_in_parent();
    $('.results.owl-carousel').owlCarousel({
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
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
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

    $(".toggle-menu .show_hide_menu").click(function () {
        $("body").toggleClass("noscroll");
        $("#menu").slideDown({ duration: 500 });
        $('.show_hide_menu').css('display', 'none');
        $('.open-menu').css('display', 'none');
        $('.close-menu').css('display', 'block');
        $('.show_hide_close_menu').css('display', 'block');
        $('div.levelOne>ul>li.news').css('background', '#cc1f27');
    });

    $(".toggle-menu .show_hide_close_menu").click(function () {
        $("body").toggleClass("noscroll");
        $("#menu").toggle();
        $('.show_hide_menu').css('display', 'block');
        $('.close-menu').css('display', 'none');
        $('.open-menu').css('display', 'block');
        $('.show_hide_close_menu').css('display', 'none');
        $('div.levelOne>ul>li.news').css('background', '#cc1f27');
    });

    //for level one 
    $(".news").click(function () {
        $("#news").css("display", "block");
        $("#videos, #livescore, #other, #subsc, #photos").css("display", "none");
        $('div.levelOne>ul>li.news').css('background', '#cc1f27');
    });
    $(".photos").click(function () {
        $('div.levelOne>ul>li.news').css('background', '#404040');
    });
    $(".other").click(function () {
        $("#other").css("display", "block");
        $("#news, #videos, #livescore, #photos, #subsc").css("display", "none");
        $('div.levelOne>ul>li.news').css('background', '#404040');
    });
    $(".subsc").click(function () {
        $("#subsc").css("display", "block");
        $("#news, #videos, #livescore, #other, #photos").css("display", "none");
        $('div.levelOne>ul>li.news').css('background', '#404040');
    });
    //for level two 
    $("#football").click(function () {
        $(".levelOne,.levelTwo").css("display", "none");
        $(".levelThree").css("display", "block");
    });
    $(".fa-arrow-left").click(function () {
        $(".levelOne,.levelTwo").css("display", "block");
        $(".levelThree").css("display", "none");
    });
});