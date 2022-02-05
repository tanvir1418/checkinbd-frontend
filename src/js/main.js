//Selectors
let header = document.querySelector('header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');
})

//===========================//
// Price range Category Page //
//===========================//
$(function() {
	$( "div#slider-range" ).slider({
	  range: true,
	  min: 250,
	  max: 50000,
	  values: [ 250, 50000 ],
	  slide: function( event, ui ) {
		$( "input#amount" ).val( "Tk" + ui.values[ 0 ] + " - Tk" + ui.values[ 1 ] );
	  }
	});
	$( "input#amount" ).val( "Tk" + $( "div#slider-range" ).slider( "values", 0 ) +
	  " - Tk" + $( "div#slider-range" ).slider( "values", 1 ) );
});


// product Gallery and Zoom
// activation carousel plugin
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    },
  });
  // change carousel item height
  // gallery-top
  let productCarouselTopWidth = $('.gallery-top').outerWidth();
  $('.gallery-top').css('height', productCarouselTopWidth);
  
  // gallery-thumbs
  let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
  $('.gallery-thumbs').css('height', productCarouselThumbsItemWith);