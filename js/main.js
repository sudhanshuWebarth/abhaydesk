
            $(document).ready(function () {
                $("#sidebar").mCustomScrollbar({
                    theme: "minimal"
                });

                $('#dismiss, .overlay').on('click', function () {
                    $('#sidebar').removeClass('active');
                    $('.overlay').fadeOut();
                });

                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').addClass('active');
                    $('.overlay').fadeIn();
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
            });
	$(document).ready(function() {
	  $('.our-collection-carousel').owlCarousel({
		   items :3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [480,1],
     	 navigation:true,
        navigationText:["",""],
        pagination:false,
        autoPlay:false
	  })
	})
    jQuery(document).on('ready', function() {

            jQuery('#gallery').slick({
              dots: false,
              infinite: true,
              speed: 700,
              autoplay: true,
              arrows: false,
              fade: true,
              pauseOnHover: false,
              responsive: [ 
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]                    
    });
jQuery('#prodottiHome').slick({
              dots: true,
              infinite: true,
              speed: 700,
              autoplay: false,
              fade: true,
              pauseOnHover: false,
              responsive: [ 
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]                    
    });



           jQuery('#galleryCorrelati').slick({
              dots: false,
              infinite: true,
              speed: 700,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [ 
              {
                  breakpoint: 976,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]                    
    });

    });

    jQuery(window).on("scroll", function() {
    if(jQuery(window).scrollTop() > 10) {
        jQuery("header").addClass("active");
    } else {
       jQuery("header").removeClass("active");
    }
    });

            jQuery(window).load(function () {
            setTimeout(function () {
                jQuery('body').removeClass('is-loading');
            }, 350);
        });
$(document).ready(function(){
    $(".testimonial-slider-design").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        itemsMobile:[550,1],
        pagination: true,
        navigation:true,
        slideSpeed:1000,
		navigationText:["",""],
        autoPlay:true
    });
});
   jQuery('.navbar-toggler').on('click', function() {
                jQuery("header").toggleClass("open");  
                jQuery("#shopInPage").removeClass("open");  
            });

            jQuery('#openfilter').on('click', function() {
                jQuery("#prodotti").toggleClass("ridotta");  
                jQuery("#filtri").toggleClass("aperti");  
            });


            jQuery('body').on('click','#iconShop', function() {
                jQuery("#shopInPage").toggleClass("open");  
                jQuery(".navbar-collapse").removeClass("show")
                jQuery("header").removeClass("open");  
            });

            jQuery( ".add_to_cart_button, .single_add_to_cart_button" ).click(function() {
              jQuery( "#iconShop").addClass('active iconpulse');
              setTimeout(function(){ jQuery( "#iconShop").removeClass('iconpulse'); }, 1500);
            });
			
			
			 function searchToggle(obj, evt){
            var container = $(obj).closest('.search-wrapper');
			var is_mobile = 0;
			if($(window).width() <= 767){
				is_mobile = 1;
			}
            if(!container.hasClass('active')){
                  container.addClass('active');
				  if(is_mobile == 1){
					  $(".mobile-search-box-clr").css("background-color","#000");
				  }
                  evt.preventDefault();
            }
            else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
                  container.removeClass('active');
				  if(is_mobile == 1){
					  $(".mobile-search-box-clr").removeAttr("style");
				  }
                  // clear input
                  container.find('.search-input').val('');
                  // clear and hide result container when we press close
                  container.find('.result-container').fadeOut(100, function(){$(this).empty();});
            }
        }

        function submitFn(obj, evt){
            value = $(obj).find('.search-input').val().trim();

            _html = "Yup yup! Your search text sounds like this: ";
            if(!value.length){
                _html = "Yup yup! Add some text friend :D";
            }
            else{
                _html += "<b>" + value + "</b>";
            }

            $(obj).find('.result-container').html('<span>' + _html + '</span>');
            $(obj).find('.result-container').fadeIn(100);

            evt.preventDefault();
        }


	$(window).load(function() {
	  $('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	  });
	});
<!--flex slider--> 
$(document).ready(function() {
    var panels = $('.user-infos');
    var panelsButton = $('.tab-content');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {

         
        })
    });

  
});



