(function($) {
	"use strict";
	var init_layout = function () {
		var
		blog_layout = $('.blog-masonry'),
		mosaic_layout = $('.masonry'),
		init_blog_layout = function () {
			blog_layout.masonry({
				itemSelector : '.item',
			});
		},
		init_mosaic_layout = function () {
			mosaic_layout.masonry({
				itemSelector: 'article.item',
				isResizeBound: false,
				isInitLayout: false
			});
		};

		// Initialize blog layout
		if (blog_layout.size() != 0) {
			$(window).on('load', init_blog_layout);
		}

		if (mosaic_layout.size() != 0) {
			var refresh_layout = function () {
				$('article.item', mosaic_layout).each(function () {
					$(this).height($(this).width());
					$('.tm-content-inner', this).height($(this).width());
				});

				mosaic_layout.masonry('layout');
			}

			$(window).on('load', init_mosaic_layout);
			$(window).on('load', refresh_layout);
			$(window).smartresize(refresh_layout);
		}
	};

	var init_animate_scroll = function () {
		$(window).on('load scroll', function () {
			$('.setanimate,.setanimate2,.setanimate3,.setanimate4,.setanimate5,.setanimate6,.appicons.bounce').each(function() {
				this.getBoundingClientRect().top < $(window).height()
					? $(this).addClass('visible')
					: $(this).removeClass('visible');
			});
			$('.appicons').each(function() {
				this.getBoundingClientRect().top < $(window).height()
					? $(this).addClass('bounce')
					: $(this).removeClass('bounce');
			});
			$('.circle i').each(function() {
				this.getBoundingClientRect().top < $(window).height()
					? $(this).addClass('animate2 fadeInDown')
					: $(this).removeClass('animate2 fadeInDown');
			});
		});
	};

	var init_countdown = function () {
		var 
		simple_style = function (data) {
			$(this.el).html( + this.leadingZeros(data.years, 4) + " <span>years</span>" + this.leadingZeros(data.days, 3) + " <span>days</span>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span>" + this.leadingZeros(data.min, 2) + " <span>min</span>" + this.leadingZeros(data.sec, 2) + " <span>sec</span>");
		},
		boxed_style = function (data) {
			$(this.el).html("<div>" + this.leadingZeros(data.years, 4) + " <span>years</span></div><div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
		};

		$('.tm-countdown').each(function () {
			$(this).countdown({
				date: $(this).attr('data-endtime'),
				render: $(this).hasClass('simple') ? simple_style : boxed_style
			});
		});
	};

	// DOMReady event
	$(function () {
		$('.crsl-items').carousel({
			visible: 3,
			itemMinWidth: 180,
			itemEqualHeight: 370,
			itemMargin: 30,
		  });
		  
		  $("a[href=#]").on('click', function(e) {
			e.preventDefault();
		});
		init_layout();
		init_animate_scroll();		
		// Goto top button
		$('.tm-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0 
			}, 800); 
			return false;
		});

	});
})(jQuery);
