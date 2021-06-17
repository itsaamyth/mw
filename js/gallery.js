   //*************** Isotope filter - Portfolio images filer

   var $Container = $('#img-filter');
   if( $Container.length>0 ) {
       $Container.isotope({
           itemSelector: '.single-port',
           transitionDuration: '0.8s'
       });
       $(".img-filter").on("click", function (e){
           $(".img-filter.active").removeClass("active");
           $(this).addClass("active");
           var selector = $(this).attr('data-filter');
           $Container.isotope({
               filter: selector
           });
           return false;
       });

       $(window).resize(function(){
           setTimeout(function(){
               $Container.isotope();
           },1000);
       }).trigger('resize');
   }