var Layout = function () {

	/*
	|----------------------------------------------------------------------------
	| STICKY NAVBAR
	|----------------------------------------------------------------------------
	*/
	var navClasses = function () {
		$(".navbar-fixed-top").headroom({
			"offset": 130,
			"tolerance": 5,
			"classes": {
				"initial": "animated",
				"pinned": "slideDown",
				"unpinned": "slideUp"
			}
		})
	}

	var toggleNav = function () {
		$('#appnav-collapse .nav a').on('click', function () {
			if ($('.navbar-header .navbar-toggle').css('display') != 'none') {
				$(".navbar-toggle").trigger("click");
			}
		})
	}

	var handleScroll = function () {
		$('.navbar').onePageNav({
			scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
			scrollOffset: 130 //Height of Navigation Bar
		})
	}


	var handlewindlowScroll = function () {
		$(window).scroll(function () {
			var $scrollHeight = $(window).scrollTop();
			if ($scrollHeight > 600) {
				$('.navbar-default.fixed-nav').slideDown(400);
			} else {
				$('.navbar-default.fixed-nav').slideUp(300);
			}
		})
	}




	/* -------------------------------------------------------------
		Variables
	------------------------------------------------------------- */
	var leftArrow = '<i class="fa fa-angle-left"></i>';
	var rightArrow = '<i class="fa fa-angle-right"></i>';
	var leftArrow2 = '<i class="fa fa-chevron-left"></i>';
	var rightArrow2 = '<i class="fa fa-chevron-right"></i>';

	/* -------------------------------------------------------------
		Feature-item-slider
	------------------------------------------------------------- */
	var handleslider = function () {
		if ($('.testimonial-slider').length) {
			$('.testimonial-slider').owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				nav: true,
				dots: false,
				navText: [leftArrow, rightArrow],
			});
		}
	}

	/* -------------------------------------------------------------
		Feature-item-slider
	------------------------------------------------------------- */
	var handleFeatureslider = function () {
		if ($('.testimonial-slider-2').length) {
			$('.testimonial-slider-2').owlCarousel({
				items: 3,
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				nav: false,
				dots: false,
			});
		}
	}

	/* -------------------------------------------------------------
		swiper-slider
	------------------------------------------------------------- */
	var swiper = new Swiper('.swiper-container', {
		mode: 'horizontal',
		loop: true,
		speed: 950,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		nextButton: '.arrow-right',
		prevButton: '.arrow-left',
		coverflowEffect: {
			rotate: -10,
			stretch: 110,
			depth: 120,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	/* -------------------------------------------------------------
		Fact Counter
	------------------------------------------------------------- */
	var handleFactCounter = function () {
		if ($('.fact-count').length) {
			$('.fact-count').counterUp({
				delay: 10,
				time: 1000
			});
		}
	}

	/*==========================================================
	  WOW
	==========================================================*/
	var wow = new WOW(
	{
		mobile: false,
		offset: 20,
	});
	wow.init();

	/* -------------------------------------------------------------
		MAGNIFIC JS
	------------------------------------------------------------- */
	var playVideo = function () {
		$('.play-video').magnificPopup({
			type: 'iframe'
		});
	}

	var magnificpopUp = function () {
		$.extend(true, $.magnificPopup.defaults, {
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'http://www.youtube.com/embed/%id%?autoplay=1'
					}
				}
			}
		})
	}

    /* go2top scroll */
	var handleGo2Top = function () {
	    var Go2TopOperation = function () {
	        var CurrentWindowPosition = $(window).scrollTop();// current vertical position
	        if (CurrentWindowPosition > 300) {
	            $(".go2top").show();
	        } else {
	            $(".go2top").hide();
	        }
	    };

	    Go2TopOperation();// call headerFix() when the page was loaded
	    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
	        $(window).bind("touchend touchcancel touchleave", function (e) {
	            Go2TopOperation();
	        });
	    } else {
	        $(window).scroll(function () {
	            Go2TopOperation();
	        });
	    }

	}


	var handleMap = function () {
		if ($('#map-canvas').length > 0) {
			function popup_listing_map() {
				var map;
				var myCenter = new google.maps.LatLng(53, -1.33);
				var marker = new google.maps.Marker({
					position: myCenter
				});
				function initialize() {
					var mapProp = {
						center: myCenter,
						zoom: 14,
						draggable: false,
						scrollwheel: false,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};

					map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);

					//Map Marker
					var marker = new google.maps.Marker({
						position: myCenter,
						map: map,
						icon: 'images/marker.png'
					});

					google.maps.event.addListener(marker, 'click', function () {

						infowindow.setContent(contentString);
						infowindow.open(map, marker);

					});
				};

				google.maps.event.addDomListener(window, 'load', initialize);

				google.maps.event.addDomListener(window, "resize", resizingMap());

				$('#popupmodal').on('show.bs.modal', function () {
					//Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
					resizeMap();
				})

				function resizeMap() {
					if (typeof map == "undefined") return;
					setTimeout(function () { resizingMap(); }, 400);
				}

				function resizingMap() {
					if (typeof map == "undefined") return;
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					map.setCenter(center);
				}
			}
			popup_listing_map();

		}

	}

	return {
		init: function (isLandingPageRequired) {
			if (isLandingPageRequired) {
				//handlePromoBlock();
				navClasses();
				toggleNav();
				handleScroll();
				handlewindlowScroll();
				handleslider();
				handleFeatureslider();
				handleGo2Top();
				swiper();
				handleFactCounter();
				playVideo();
				magnificpopUp();
				handleMap();

			}
			else {
				$(window).scrollTop(0);

				//var activeMenu = '#about';
				//$(".header-navigation li").each(function () {
				//    $(this).removeClass("current");
				//    var menu = $(this).find('a').attr('href');
				//    if (menu === activeMenu) {
				//        $(this).addClass("current");
				//    }
				//});
			}
		},
	};

	
}();