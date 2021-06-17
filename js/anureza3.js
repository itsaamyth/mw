// jQuery(document).ready(function($) {
//     $('.stats').counterUp({
//       delay: 50,
//       time: 8000,
//     });
//   }); 
jQuery("#carousel2").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 10,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 900,
  smartSpeed: 1000,
  center:true,
  nav: false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
