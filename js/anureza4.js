/*--------------------- Copyright (c) 2019 -----------------------
[Master Javascript]
Project: Interior Design - Multipurpose Responsive HTML Template
Version: 
Assigned to: 
-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Solar = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

		/*-------------- Solar Installation Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/

			this.Testimonial_slider();
			this.Blog();
			this.Partner();
			this.Gallery();
			this.Bottom();
			this.Toggle();
			this.Counter();
			
		},
		
		/*-------------- Solar Installation Functions Calling ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		
		// Testimonial__slider
			Testimonial_slider: function(){
				if($('.solar_testimonial_slider .swiper-container').length > 0){
				var swiper = new Swiper('.solar_testimonial_slider .swiper-container', {
				  spaceBetween: 30,
				  speed: 800,
				  loop: true,
				  centeredSlides: true,
				  autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				  },
				  pagination: {
					el: '.swiper-pagination',
					clickable: true,
				  },
				  navigation: {
					nextEl: '.solar_testimonial_slider .swiper-button-next',
					prevEl: '.solar_testimonial_slider .swiper-button-prev',
				  },
				});
				}
			},
		// Testimonial__slider
		
		// Blog Post Slider 
			Blog: function(){  
				if($('.solar_team_section .swiper-container').length > 0){
					var swiper = new Swiper('.solar_team_section .swiper-container', {
					  slidesPerView: 3,
					  spaceBetween: 10,
					  speed: 600,
					  pagination: {
						el: '.swiper-pagination',
						clickable: true,
					  },
					  autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					  },
					  breakpoints: {
						1024: {
						  slidesPerView: 2,
						  spaceBetween: 30,
						},
						768: {
						  slidesPerView: 2,
						  spaceBetween: 30,
						},
						640: {
						  slidesPerView: 1,
						  spaceBetween: 20,
						},
						320: {
						  slidesPerView: 1,
						  spaceBetween: 10,
						}
					  }
					});
				}
			},
		// Blog Post Slider
		
		// Partner Slider 
			Partner: function(){  
				if($('.solar_partner_section .swiper-container').length > 0){
					
					
					 var swiper = new Swiper('.solar_partner_section .swiper-container', {
					  slidesPerView: 5,
					  spaceBetween: 50,
					  // init: false,
					  autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					  },
					  breakpoints: {
						1024: {
						  slidesPerView: 4,
						  spaceBetween: 30,
						},
						768: {
						  slidesPerView: 4,
						  spaceBetween: 15,
						},
						640: {
						  slidesPerView: 3,
						  spaceBetween: 10,
						},
						380: {
						  slidesPerView: 2,
						  spaceBetween: 10,
						}
					  }
					});
					
					
					
				}
			},
		// Partner
		
		// Gallery
			Gallery: function(){  
				if($('.solar_portfolio').length > 0){
					
					$(document).on('click', '[data-toggle="lightbox"]', function(event) {
					event.preventDefault();
					$(this).ekkoLightbox();
					});

				}
			},
		// Gallery
		
		// Bottom To Top
			Bottom: function(){  
				if($('#button').length > 0){
					
					var btn = $('#button');

					$(window).scroll(function() {
					  if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					  } else {
						btn.removeClass('show');
					  }
					});

					btn.on('click', function(e) {
					  e.preventDefault();
					  $('html, body').animate({scrollTop:0}, '300');
					});


				}
			},
		// Bottom To Top
		
		// Toggle			
			Toggle: function () {
					$(".solar_toggle").click(function() {
					$(".solar_menus").toggleClass('solar_menu_show');
					});
				
					$('.solar-close-icon').on('click', function(){
					$('.solar_menus.solar_menu_show').removeClass('solar_menu_show')
					});
				
			},
		// Toggle
		
		// Counter			
			Counter: function () {
				if($(".solar_counter").length > 0){
					
					
					$('.count').each(function () {
						$(this).prop('Counter',0).animate({
							Counter: $(this).text()
						}, {
							duration: 4000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});
					
				}
			},
		// Counter
		
		
	
		
		
		
	/*------------------------------------------------------------------*/ 
	
	};
	Solar.init();	 
	
		
}(jQuery));	


new WOW().init();