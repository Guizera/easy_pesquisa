"use strict";


/* =================================
===  VARIABLES                   ====
=================================== */

var $html = $('html'),
    $document = $(document),
    $window = $(window);

/* =================================
===  PRELOADER                    ====
=================================== */

$window.on ('load', function() {
    
    var $preloader = $('#preloading');

    $preloader.fadeOut(500);

})


/* =================================
===  MENU                         ====
=================================== */

$('a[href*=\\#]').on ('click', function(e) {
    
    var anchor = $(this);

    $('html, body').stop().animate({

        scrollTop: $(anchor.attr('href')).offset().top - 50

    }, 1500);

    e.preventDefault();
});

$window.on ('scroll', function() {

    if ($(this).scrollTop() > 300) {

        $('.menu-top').addClass('menu-shrink');
    } 

    else {
        
        $('.menu-top').removeClass('menu-shrink');
    }
});

$document.on('click', '.navbar-collapse.in', function(e) {

    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});

/* =================================
===  STELLAR                      ====
=================================== */

$window.stellar({ 
    horizontalScrolling: false,

});

/* =================================
===  Screenshot Slider            ====
=================================== */
   
    var $screenshot = $("#owl-screenshots");

    $screenshot.owlCarousel({
	
    items: 4, // 4 items above 1201px browser width
    itemsDesktop: [1200, 4], // 4 items between 1200px and 993px
    itemsDesktopSmall: [992, 3], // 3 items betweem 992px and 769px
    itemsTablet: [768, 3], // 3 items between 768 and 601
    itemsTabletSmall: [480, 2], // 2 items in widen mobile device
    itemsMobile: [320, 1] // 1 items in any small mobile device
});

/* =================================
===  Tewstimonials Slider         ====
=================================== */
    
    var $testimonials = $("#testimonials-details");

    $document.on ('ready', function() {

    $testimonials .owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: 5000,
        singleItem: true
    });
});

/* =================================
===  MAILCHIMP                    ====
=================================== */

$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "http:////rhudmdesign.us8.list-manage.com/subscribe/post?u=5a1dc855f93b40675a8002a59&amp;id=9fb6c565ab" 
    //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
});

function mailchimpCallback(resp) {
    if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);

    } else if (resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }
}


/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */

$("#subscribe").on ( 'submit', function (e) {
    e.preventDefault();
    var email = $("#subscriber-email").val();
    var dataString = 'email=' + email;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email)) {
        $.ajax({
            type: "POST",
            url: "subscribe/subscribe.php",
            data: dataString,
            success: function () {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                $('.hide-after').fadeOut(500);
            }
        });
    } else {
        $('.subscription-error').fadeIn(1000);
    }

    return false;
});


/* =================================
===  CONTACT FORM                 ====
=================================== */

$("#contact").on ( 'send', function(e) {

    e.preventDefault();
    
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function() {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } 

    else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});

/* =================================
===  AOS animation controls       ====
=================================== */

    AOS.init ({

        offset: 0,
        duration: 600,
        delay: 600,
        easing: 'ease-in-sine',
        once:true,

    });

/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX  ====
=================================== */

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

      var msViewportStyle = document.createElement('style')

      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )

      document.querySelector('head').appendChild(msViewportStyle)
    }
/* =================================
===  Skrollr controls       ====
=================================== */

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );