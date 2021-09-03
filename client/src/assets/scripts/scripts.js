// Carousel options

$('.carousel').carousel({
	interval: 3000,
})


function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

// Initialize and add the map
function initMap() {
	// The location of Uluru
	const restAdress = { lat: 44.409008, lng: 26.105395 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 15,
	  center: restAdress,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
	  position: restAdress,
	  map: map,
	});
  }

jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .carousel-caption h1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.section-4-container').backstretch("assets/img/backgrounds/1.jpg");
    
    /*
	    Wow
	*/
	new WOW().init();
	
});
