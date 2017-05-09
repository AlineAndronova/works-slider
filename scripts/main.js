;(function($){
	'use strict';

	$('.ba-container').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          infinite: true,
	        }
	      }
	    ]
	});

})(jQuery);
