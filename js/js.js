$(document).ready(function(){	
	var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'; //for getting the correct event

	//animates nav
	$(function() {
	    var header = $(".normal");
	    var $height = $('.navgrad').height();

	    $(window).scroll(function() {    
	        var scroll = $(window).scrollTop();
	    
	        if (scroll >= $height) {
	            header.removeClass('normal').addClass("different");
	        } else {
	            header.removeClass("different").addClass('normal');
	            $('nav a.active').removeClass('active');
	        }
	    });
	});
	//scroll to section
	$('.scrollit a').on(hitEvent, function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 45;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
	});
	//active class
	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= 0) {
	        $('section.navit').each(function(i) {
	            if ($(this).position().top <= windscroll + 55) {
	                $('nav a.active').removeClass('active');
	                $('nav a').eq(i).addClass('active');
	            }
	        });
	    } else {
	        $('nav a.active').removeClass('active');
	        $('nav a:first').addClass('active');
	    }
	}).scroll();
	//email input
	$('.form-control').on(hitEvent, function(){
		$('.email').focus();
	});
	//mobile nav
	$('#clickmenu').on(hitEvent, function(){
		$('.menuclosed').toggleClass('menuopen');
		$('.movenav').toggleClass('navmoved');
		$('.mobilenavclosed').toggleClass('mobilenavopen');
		$('.menuicon').toggleClass('menuiconrotate');

		setTimeout(function(){
			$('nav .mone a').addClass('fadeInRight animated')
		}, 1);
		setTimeout(function(){
			$('nav .mtwo a').addClass('fadeInRight animated')
		}, 100);
		setTimeout(function(){
			$('nav .mthree a').addClass('fadeInRight animated')
		}, 200);
		setTimeout(function(){
			$('nav .mfour a').addClass('fadeInRight animated')
		}, 300);
		setTimeout(function(){
			$('nav .mfive a').addClass('fadeInRight animated')
		}, 400);
	});
	$('#closemenu').on(hitEvent, function(){
		$('.menuclosed').removeClass('menuopen');
		$('.movenav').removeClass('navmoved');
		$('.mobilenavclosed').removeClass('mobilenavopen');
		$('.menuicon').removeClass('menuiconrotate');

		$('nav .mone a').removeClass('fadeInRight animated');
		$('nav .mtwo a').removeClass('fadeInRight animated');
		$('nav .mthree a').removeClass('fadeInRight animated');
		$('nav .mfour a').removeClass('fadeInRight animated');
		$('nav .mfive a').removeClass('fadeInRight animated');
	});	
	//animates back to top
	$(function() {
	    var header = $(".backtotop");
	    var $height = $('header').height();

	    $(window).scroll(function() {    
	        var scroll = $(window).scrollTop();
	    
	        if (scroll >= $height+500) {
	            header.removeClass('backtotop').addClass("showtop");
	        } else {
	            header.removeClass("showtop").addClass('backtotop');
	        }
	    });
	});	

	//sets animations on pageload
	setTimeout(function(){
		$('nav.normal').addClass('fadeInDownCustom')
	}, 1);
	setTimeout(function(){
		$('header h1').addClass('fadeInCustom')
	}, 500);
	setTimeout(function(){
		$('header h4').addClass('fadeInDownCustom')
	}, 800);
	setTimeout(function(){
		$('.mainbutton').addClass('fadeInDownCustom')
	}, 1100);
	setTimeout(function(){
		$('.movedown').addClass('fadeInCustom')
	}, 1500);
	//animations on scroll
	var appear = $(window).height() - 50;
	//aabout
	$(window).scroll(function() {
		$('.about .left h2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.about .left p').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.about .left .checklist').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.about .left .getit').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.about .right .img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		$('.circlecover').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		//aboutnext
		$('.aboutnext .right h2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		$('.aboutnext .right p').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		$('.aboutnext .right .checklist').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		$('.aboutnext .right .getit').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		$('.aboutnext .img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		//inter
		$('.inter .infosection').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		//services
		$('.services h2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInUp animated");
			} else {
				$(this).removeClass("fadeInUp animated");
				$(this).addClass("preanimate");
			}
		});
		$('.services hr').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		$('.services p.servp').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInDown animated");
			} else {
				$(this).removeClass("fadeInDown animated");
				$(this).addClass("preanimate");
			}
		});
		$('.services .iconservi').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInUp animated");
			} else {
				$(this).removeClass("fadeInUp animated");
				$(this).addClass("preanimate");
			}
		});
		$('.services .coverbutton').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInDown animated");
			} else {
				$(this).removeClass("fadeInDown animated");
				$(this).addClass("preanimate");
			}
		});
		$('.services .leftone').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.services .rightone').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		//secondinter
		$('.secondinter h2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.secondinter p').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.secondinter button').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		//clients
		$('.clients h2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInUp animated");
			} else {
				$(this).removeClass("fadeInUp animated");
				$(this).addClass("preanimate");
			}
		});
		$('.clients hr').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		$('.clients p.clip').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInDown animated");
			} else {
				$(this).removeClass("fadeInDown animated");
				$(this).addClass("preanimate");
			}
		});
		$('.clients .leftone').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.clients .rightone').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		$('.clients .cliimg').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		//sellingprice
		$('.sellingprice h2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInUp animated");
			} else {
				$(this).removeClass("fadeInUp animated");
				$(this).addClass("preanimate");
			}
		});
		$('.sellingprice hr').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
		$('.sellingprice p.prip').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInDown animated");
			} else {
				$(this).removeClass("fadeInDown animated");
				$(this).addClass("preanimate");
			}
		});
		$('.sellingprice .leftprice').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInLeft animated");
			} else {
				$(this).removeClass("fadeInLeft animated");
				$(this).addClass("preanimate");
			}
		});
		$('.sellingprice .centerprice').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInUp animated");
			} else {
				$(this).removeClass("fadeInUp animated");
				$(this).addClass("preanimate");
			}
		});
		$('.sellingprice .rightprice').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInRight animated");
			} else {
				$(this).removeClass("fadeInRight animated");
				$(this).addClass("preanimate");
			}
		});
		//help
		$('.help .helpanimate').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInUp animated");
			} else {
				$(this).removeClass("fadeInUp animated");
				$(this).addClass("preanimate");
			}
		});
		//trial
		$('.trial .trialanimate').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeInDown animated");
			} else {
				$(this).removeClass("fadeInDown animated");
				$(this).addClass("preanimate");
			}
		});
		//footer
		$('footer .footeranimate').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+appear) {
				$(this).addClass("fadeIn animated");
			} else {
				$(this).removeClass("fadeIn animated");
				$(this).addClass("preanimate");
			}
		});
	});
	//for pullover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
});