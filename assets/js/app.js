$(document).ready(function () {
    $('#burgerMenu').click(function(){
    	$('.main-menu').toggleClass('opened');
    	$('body').toggleClass('opened-menu');
    });
    $('.card.big .author .avatar').hover(function() {
    	$(this).parent().find('.profile-details').toggleClass('show');
    });
 //    $('.slider').slick({
	// 	dots: true,
	// 	infinite: true,
	// 	centerMode: true,
	// 	centerPadding: '12%',
	// 	slidesToShow: 3,
	// 	speed: 500
	// });
});