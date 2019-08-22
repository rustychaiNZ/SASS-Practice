console.log('my script is working!!!');

$('.reveal').hide();

$(document).ready(function(){

	// Opens the hamburger menu
	$('#menu').click(function(){
		$('nav').fadeToggle('active');
	})

	//Button that allows you to close the hamburger menu
	$('#close').click(function(){
		$('nav').fadeOut(500);
	})

	// Closes the hamburger menu
	$('nav').mouseleave(function(){
		$('nav').fadeOut(500);
	})

	// When button is clicked, a paragraph is revelaed
	// $('.btn').click(function(){
	// 	$('.reveal').show();
	// 	$(this).hide();
	// })
	// $('#hide').click(function(){
	// 	$('.reveal').hide();
	// 	$('.btn').show();
	// })
	$('.btn').click(function(){
		$('.reveal').slideToggle(2000);
	})


	// Super suitable for a sticky nav
	$('#varibles').click(function(){
		$('html,body').animate({
			scrollTop: $('.uOL').offset().top}, 1000);
		})


}); //Document ready ends ---------