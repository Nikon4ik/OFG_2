$(function() {
    $('.slider').slick({
        dots: false,
		infinite: true,
		speed: 400,
		dots: true,
		slidesToShow: 1,
		appendArrows: $('.slider-arrow'),
		prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="#292929"/><g clip-path="url(#clip0)"><path d="M23.2897 30.9635L33.8021 41.6014C34.3277 42.1328 35.1793 42.1328 35.7063 41.6014C36.2319 41.07 36.2319 40.2068 35.7063 39.6753L26.1441 30.0005L35.705 20.3257C36.2306 19.7943 36.2306 18.9311 35.705 18.3983C35.1793 17.8669 34.3264 17.8669 33.8008 18.3983L23.2884 29.0361C22.7708 29.562 22.7708 30.4388 23.2897 30.9635Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(18 18)"/></clipPath></defs></svg></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" width="60" height="60" transform="rotate(-180 60 60)" fill="#292929"/><g clip-path="url(#clip0)"><path d="M36.6166 29.0374L26.2636 18.3981C25.7459 17.8673 24.9072 17.8673 24.3883 18.3981C23.8706 18.929 23.8706 19.7912 24.3883 20.322L33.8055 29.9993L24.3896 39.6766C23.8719 40.2075 23.8719 41.0697 24.3896 41.6019C24.9072 42.1327 25.7472 42.1327 26.2649 41.6019L36.6179 30.9627C37.1276 30.4373 37.1276 29.5616 36.6166 29.0374Z" fill="white"/></g><defs> <clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(42 42) rotate(-180)"/></clipPath></defs></svg><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
			{
			  breakpoint: 480,
			  settings: {
				dots: true
			  }
			}
		  ]
    });

    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
     });
});

$(function() {
    $('.slider_adaptive').slick({
		breakpoint: 600,
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		arrows: false
    });
});
$(function() {
    $('.fourth_slider').slick({
		breakpoint: 600,
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		arrows: false
    });
});
$(function() {
    $('.fifth_slider').slick({
		breakpoint: 600,
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		arrows: false
    });
});

$(function () {
	$('.feedback').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Введите имя"
			},
			tel: {
				required: "Введите номер телефона",
				number: "Введите корректный номер телефона",
				maxlength: jQuery.validator.format("Введите корректный номер телефона"),
				minlength: jQuery.validator.format("Введите корректный номер телефона")
			},
			email: {
				required: "Введите e-mail",
				email: "Введите корректный e-mail"
			},
		}
	});
	$('.feedback1').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Введите имя"
			},
			tel: {
				required: "Введите номер телефона",
				number: "Введите корректный номер телефона",
				maxlength: jQuery.validator.format("Введите корректный номер телефона"),
				minlength: jQuery.validator.format("Введите корректный номер телефона")
			},
			email: {
				required: "Введите e-mail",
				email: "Введите корректный e-mail"
			},
		}
	});
	$('.feedback_packet').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Введите имя"
			},
			tel: {
				required: "Введите номер телефона",
				number: "Введите корректный номер телефона",
				maxlength: jQuery.validator.format("Введите корректный номер телефона"),
				minlength: jQuery.validator.format("Введите корректный номер телефона")
			},
			email: {
				required: "Введите e-mail",
				email: "Введите корректный e-mail"
			},
		}
	});
	$('.feedback_en').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Enter your name"
			},
			tel: {
				required: "Enter your phone number",
				number: "Enter the correct phone number",
				maxlength: jQuery.validator.format("Enter the correct phone number"),
				minlength: jQuery.validator.format("Enter the correct phone number")
			},
			email: {
				required: "Enter your e-mail",
				email: "Please enter a valid e-mail"
			},
		}
	});
	$('.feedback_en1').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Enter your name"
			},
			tel: {
				required: "Enter your phone number",
				number: "Enter the correct phone number",
				maxlength: jQuery.validator.format("Enter the correct phone number"),
				minlength: jQuery.validator.format("Enter the correct phone number")
			},
			email: {
				required: "Enter your e-mail",
				email: "Please enter a valid e-mail"
			},
		}
	});
	$('.feedback_en2').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Enter your name"
			},
			tel: {
				required: "Enter your phone number",
				number: "Enter the correct phone number",
				maxlength: jQuery.validator.format("Enter the correct phone number"),
				minlength: jQuery.validator.format("Enter the correct phone number")
			},
			email: {
				required: "Enter your e-mail",
				email: "Please enter a valid e-mail"
			},
		}
	});
});
$(function() {
	$(window).scroll(function () {
		if( $(window).scrollTop() > 1 && $(window).width() > '600' &&  $('header').hasClass('other') ) {
			$('header').css('position','fixed');
			$('header').css('top','0');
			$('header').css('z-index','1100');
			$('.header').css('background-color','#1D1D1D');
			$('#first_screen').css('margin-top','100px');
		}
		else if( $(window).scrollTop() == 0 && $(window).width() > '600' && $('header').hasClass('other') ) {
			$('header').css('position','initial');
			$('.header').css('background-color','#252525');
			$('#first_screen').css('margin-top','unset');
			$('header').css('z-index','unset');
		}
	});
});

$(window).scroll(function (event) {
	if( $(this).scrollTop() > 5220 && $(this).scrollTop() < 5920 ) {
		current = $(window).scrollTop();
		var ele = $(".ticker");
		var newPosition = -1775 + (current - 5220)*2.55;
		ele.css({right:newPosition+'px'});
	}
});
$(window).scroll(function (event) {
	if ( $(window).width() <= '1530' && $(this).scrollTop() > 6940 && $(this).scrollTop() < 7392 ){
		current = $(window).scrollTop();
		var ele = $(".ticker");
		var newPosition = -768 + (current - 6940)*1.7;
		ele.css({right:newPosition+'px'});
	}
});
$(window).scroll(function (event) {
	if ( $(window).width() <= '600' && $(this).scrollTop() > 5125 && $(this).scrollTop() < 5425 ){
		current = $(window).scrollTop();
		var ele = $(".ticker_mobile");
		var newPosition = -320 + (current - 5175)*1.3;
		ele.css({right:newPosition+'px'});
	}
});

$(function () {
	$('.menuBar_wrapper').on('click', function() {
		$('.menu').toggleClass('md-show');

		if ( $('.menu').hasClass('md-show') ) {
			document.body.style.overflowY = 'hidden';
			$('header .container').css('z-index', 1100);
		}
		else {
			document.body.style.overflowY = 'auto';
			$('header .container').css('z-index', 1100);
		}
	});
});
$(function () {
	$('.menuLink').on('click', function() {
		$('.menu').removeClass('md-show');
		$('.menuBar').removeClass('menuBar_active');
		document.body.style.overflowY = 'auto';
	});
});

$(function () {
	$('.md-trigger').on('click', function() {
		$('.md-modal').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.md-modal').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.md-modal').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});
});
$(function () {
	$('.packet-trigger').on('click', function() {
		$('.packet-modal').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.packet-modal').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.packet-modal').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});
});
$(function () {
	$('.md-offer').on('click', function() {
		$('.documents').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-offer').on('click', function() {
		if( $(this).hasClass('offer') ) {
			$('.iframe').attr("src","docs/offer.html");
		}
		else if ( $(this).hasClass('policy') ) {
			$('.iframe').attr("src","docs/policy.html");
		}
		else if ( $(this).hasClass('agreement') ) {
			$('.iframe').attr("src","docs/agreement.html");
		}
		else if ( $(this).hasClass('consent') ) {
			$('.iframe').attr("src","docs/consent.html");
		}
		else if ( $(this).hasClass('marathon') ) {
			$('.iframe').attr("src","docs/marathon.html");
		}
	});
});
$(function () {
	$('.md-offer1').on('click', function() {
		$('.documents').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-offer1').on('click', function() {
		if( $(this).hasClass('offer') ) {
			$('.iframe').attr("src","../docs/offer.html");
		}
		else if ( $(this).hasClass('policy') ) {
			$('.iframe').attr("src","../docs/policy.html");
		}
		else if ( $(this).hasClass('agreement') ) {
			$('.iframe').attr("src","../docs/agreement.html");
		}
		else if ( $(this).hasClass('consent') ) {
			$('.iframe').attr("src","../docs/consent.html");
		}
		else if ( $(this).hasClass('marathon') ) {
			$('.iframe').attr("src","../docs/marathon.html");
		}
	});
});
$(function () {
	$('.md-offer2').on('click', function() {
		$('.documents').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-offer2').on('click', function() {
		if( $(this).hasClass('offer') ) {
			$('.iframe').attr("src","../../docs/offer_en.html");
		}
		else if ( $(this).hasClass('policy') ) {
			$('.iframe').attr("src","../../docs/policy_en.html");
		}
		else if ( $(this).hasClass('agreement') ) {
			$('.iframe').attr("src","../../docs/agreement_en.html");
		}
		else if ( $(this).hasClass('consent') ) {
			$('.iframe').attr("src","../../docs/consent_en.html");
		}
		else if ( $(this).hasClass('marathon') ) {
			$('.iframe').attr("src","../../docs/marathon_en.html");
		}
	});
});
$(function () {
	$('.md-offer3').on('click', function() {
		$('.documents').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-offer3').on('click', function() {
		if( $(this).hasClass('offer') ) {
			$('.iframe').attr("src","../docs/offer_en.html");
		}
		else if ( $(this).hasClass('policy') ) {
			$('.iframe').attr("src","../docs/policy_en.html");
		}
		else if ( $(this).hasClass('agreement') ) {
			$('.iframe').attr("src","../docs/agreement_en.html");
		}
		else if ( $(this).hasClass('consent') ) {
			$('.iframe').attr("src","../docs/consent_en.html");
		}
		else if ( $(this).hasClass('marathon') ) {
			$('.iframe').attr("src","../docs/marathon_en.html");
		}
	});
});

$(function () {
	$('.packet-trigger').on('click', function() {
		var text = $(this).parent().siblings( '.headline' ).children( 'h3' ).text();
		$('.packet-modal h3').text("Пакет"+" «"+text+"»");
	});
});
$(function () {
	$('.packet-trigger').on('click', function() {
		var text = $(this).parent().siblings( '.headline' ).children( 'h3' ).text();
		$('.packet-modal h3.en').text("Packet"+" «"+text+"»");
	});
});
$(function () {
	$( '.coach' ).on('click', function() {
		var coach = $(this).prev().attr('id');
		var modal_coach = $( '.packet-modal' ).children( '.md-content' ).children( '.coaches' ).children( 'input' ).toArray().map(el => el.value);
		if( modal_coach[0] == coach ) {
			document.getElementById( 'packet_coach_1' ).setAttribute('checked', true);
		}
		else if( modal_coach[1] == coach ) {
			document.getElementById( 'packet_coach_2' ).setAttribute('checked', true);
		}
		else if( modal_coach[2] == coach ) {
			document.getElementById( 'packet_coach_3' ).setAttribute('checked', true);
		}
		else if( modal_coach[3] == coach ) {
			document.getElementById( 'packet_coach_4' ).setAttribute('checked', true);
		}
	});
});

$(function() {
    $(document).ready(function(){
		$(".smooth").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});
});

document.querySelector('.menuBar_wrapper').onclick = function(){
	document.querySelector('.menuBar').classList.toggle('menuBar_active');
}