$(function() {

	$('.product__menu .hamburger').click(function() {
		$('.product__menu ul').slideToggle('slow');
		$('.product__menu .hamburger').toggleClass('is-active');
	});

	$("#phone").mask("+7 (999) 999-99-99");
	$("#phone-2").mask("+7 (999) 999-99-99");

	$('.header .hamburger').click(function() {
		$(this).toggleClass('is-active');
	})

});
