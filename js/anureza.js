$( document ).ready(function() {

  "use strict"; 
    // *************counter-up js - work counter

    $('.stats').counterUp({
      delay: 80,
      time: 90000,
    });

  // Detect device type
  var isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      isMobile = true;
  } else {
      isMobile = false;
  }

  // Check if is Email
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  if (isMobile) {

    // Navigation - Dropdown menu on mobile
    $('.main-menu > li > a').on('click', function(e) {
      if ($(this).parent().children('ul').length) {
        e.preventDefault();
      }
      $(this).parent().find('i').toggleClass('open');
      $(this).parent().find('ul').toggle();
    });

    // Navigation - show & close menu on mobile
    $('.btn-nav-mobile').on('click', function() {
      $(this).addClass('btn-nav-open');
      $('.nav').addClass('nav-open');
      $('.overlay').addClass('overlay-open');
    });
    $('.overlay').on('click', function() {
      $(this).removeClass('overlay-open');
      $('.nav').removeClass('nav-open');
      $('.btn-nav-mobile').removeClass('btn-nav-open');
    });

  }

  if (!isMobile) {
    // Fixed header on scroll
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 300) {
        $(".main-bar").addClass("pinned");
      } else {
        $(".main-bar").removeClass("pinned");
      }
    });
  }

  // Magnific popup initialization
  $('.photo-popup').magnificPopup({
    type:'image',
    gallery: {
      enabled: true
    },
  });

  // Home - Intro slider
  $('.slick-slider').slick({
    dots: true,
    appendDots: '.dots-wrapper',
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    cssEase: 'ease'
  });
  

  // Footer - partners slider on mobile
  $('.partners-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      }
    ]
  });

  // Video overlay
  $('.play').on('click', function() {
    $('.video-content').addClass('video-content-open');
  });

  $('.video-content').on('click', function() {
    $(this).removeClass('video-content-open');
  });

  // Accordion - on single service page
  $('.accordion-title').on('click', function() {
    $(this).parent().toggleClass('opened');
  });

  var $grid = $('.work-grid').isotope({
    itemSelector: '.col-lg-4',
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  $('.work-tabs').on( 'click', 'button', function() {
    $('.work-tabs li').removeClass('active');
    $(this).parent().addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  

  // Contact form
  $('#contact-form').on('submit', function(e){
    e.preventDefault();

    var ctErrors = false;
    var ctSuccess = $('#contact-success');
    var ctForm = $(this);
    var ctName = $('#contact-name');
	var ctContact = $('#contact-phone');
    var ctEmail = $('#contact-email');
    var ctMessage = $('#contact-message');
    var ctSubmit = $('#contact-submit');

    ctForm.find('.contact-error').removeClass('contact-error');

    if (!ctName.val()) {
      ctErrors = true;
      ctName.addClass('contact-error');
    }
	if (!ctContact.val()) {
      ctErrors = true;
      ctContact.addClass('contact-error');
    }
    if (!ctEmail.val() || !isEmail(ctEmail.val())) {
      ctErrors = true;
      ctEmail.addClass('contact-error');
    }
    if (!ctMessage.val()) {
      ctErrors = true;
      ctMessage.addClass('contact-error');
    }

    if (ctErrors) {
      return false;
    } else {
      $.ajax({
        url: ctForm.attr('action'),
        type: ctForm.attr('method'),
        data: ctForm.serialize(),
        datatype: 'json',
    		success: function(data) {
  		    if (data.success === true) {
            ctSuccess.show();
            ctForm.find('input, textarea').val('');
  		    }
  		    else {
            for(field in data.errors) {
  		     		var ctInput = ctForm.find('input[name='+ field+'], textarea[name='+ field+']');
  		     		ctInput.addClass('contact-error');
		     	  }
  		    }
    		},
        error: function(xhr){
          ctForm.text('Ops, something went wrong.');
    		}
      });
    }
  });

});


// Spinner on load page
$(window).on('load', function () {

  if ($(".spinner-container").length > 0) {
    $(".spinner-container").fadeOut("slow");
  }

});
