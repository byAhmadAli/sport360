$(document).ready(function () {
    $('#burgerMenu').click(function(){
    	$('.main-menu').toggleClass('opened');
    	$('body').toggleClass('opened-menu');
    })
});