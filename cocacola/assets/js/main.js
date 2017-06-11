
$('.logo').on('click', function() {
	console.log(window.innerWidth);
	if(window.innerWidth < 600) {
		console.log('fired');
		$('.nav-options').toggleClass('active');
		$('.logo').toggleClass('clicked');
		$('.cola').toggleClass('active');
		$('.donate-link').toggleClass('active');
		$('.foundation').toggleClass('active');
	}
})