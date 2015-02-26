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
        if ($( window ).width() > 767) {
            $(".non-brand-item").css("border-bottom", "3px solid #009933")
                                .css("padding-bottom", "5px" )
                                .css("padding-left", "1px" )
                                .css("padding-right", "1px" );
        }
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        if ($( window ).width() > 767) {
            $(".navbar-custom a").css("color", "#fff");
            $(".non-brand-item").css("border-bottom", "0px")
                                .css("padding-bottom", "15px" )
                                .css("padding-left", "15px" )
                                .css("padding-right", "15px" );
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

$(window).resize(function() {
    if ($( window ).width() < 767) { 
        $(".non-brand-item").css("border-bottom", "0px")
                            .css("padding-left", "15px");
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

function greedyJumbotron() {
    var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome on tablet

    var jumbotron = $(this);
    var viewportHeight = $(window).height();

    $(window).resize(function () {
        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            update();
        }
    });

    function update() {
        jumbotron.css('height', viewportHeight + 'px');
    }

    update();
}

$('.greedy-jumbotron').each(greedyJumbotron);

wow = new WOW({
    mobile: false
});
wow.init();