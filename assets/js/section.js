$(document).ready(function () {
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
                nav: false
            },
            1000: {
                items: 3,
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
    $("#toogle-details").click(function () {
        $(".matchdetils").toggle();
    });
});