console.log('my script is working!!!');

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

});