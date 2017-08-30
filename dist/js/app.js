$(document).ready(function () {
    $('#burgerMenu').click(function(){
    	$('.main-menu').toggleClass('opened');
    	$('body').toggleClass('opened-menu');
    });
    $('.card.big .author .avatar').hover(function() {
    	$(this).parent().find('.profile-details').toggleClass('show');
    });
    // slider
    var slider = function(selector, show, scroll, arrows, repeat){
        var slider = $(selector);
        var direction = {}
        direction.data = slider.data('direction');
        direction.flag = false;
        if(direction.data == "rtl"){
            direction.flag = true;
        }
        slider.slick({
            dots: true,
            infinite: repeat,
            speed: 300,
            slidesToShow: show,
            slidesToScroll: scroll,
            rtl: direction.flag,
            prevArrow: $(arrows[0]),
            nextArrow: $(arrows[1]),
            autoplay:false,
            autoplaySpeed:5000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 376,
                    settings: "unslick"
                }
            ]
        });
        slider.animate({
            opacity: 1
        });
    }
    // big slider
    var bigSlider = new slider('.big-slider', 3, 3, ['.big-prev', '.big-next'],  true);
    var bigSlider = new slider('.promoted-slider', 3, 3, ['.promoted-prev', '.promoted-next'],  true);
    

    

    // $('.post-action').each(function () {
    //     var _this = this;
    //   $('body').append($('.post-action').css({
    //     position:'absolute',
    //     left:$(_this).offset().left*-1, 
    //     top:$(_this).offset().top,
    //     'z-index': 99
    //   }).detach());
    // });
    
});