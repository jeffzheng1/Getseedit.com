/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-custom a").css("color", "#009933");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        if ($( window ).width() > 767) {
            $(".navbar-custom a").css("color", "#fff");
        }
    }
});

$(window).resize(function() {
    if ($( window ).width() > 767 && $(".navbar").offset().top < 50) {
        $(".navbar-custom a").css("color", "#fff");
    } else { 
        $(".navbar-custom a").css("color", "#009933");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});