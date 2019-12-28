$(document).ready(function() {

    /////////// Navbar Scroll Styling//////////////////////////

    $(function() {
        var myNavbar = $('.bg-dark');

        $(window).scroll(function() {
            if ($(window).scrollTop() <= 50) {
                myNavbar.removeClass('navbar-scroll');

            } else {
                myNavbar.addClass('navbar-scroll');
            }
        });
    });

    /////////////////////////////////////////////

    // Smooth Scroll To Elements
    $('.navbar li a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);

    });
	

    // Icon Scroll To About
    $('.about a.anchor').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);

    });

    // Add Active Class On Navbar Link and remove from siblings

    $('.navbar li a').click(function() {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {

        //Sync Navbar Links With Sections

        $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                //console.log($(this).attr('id'));
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockID + '"]').addClass('active');
            }
        });

        ////// first Owl Carousel ///////////
        $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                respnsiveClass: true,
                smartSpeed: 600,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                        nav: false,
                        loop: false,
                        dots: true
                    }
                }
            })
            //////////////////////////////////////
            // Scroll-to-top button

        var scrollToTop = $('.scroll-to-top');
        if ($(window).scrollTop() > 1100) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400);
            }
        } else {
            scrollToTop.fadeOut(400);
        }
    });

    // Start portfolio

    $('.portfolio ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md-3').delay(300).fadeIn();
        } else {
            $('.shuffle-images .col-md-3').fadeOut();
            $($(this).data('class')).delay(300).fadeIn();

        }
    });

    // End portfolio

    $(".portfolio .port").hover(function() {

        $(this).children('.onHover').fadeIn();
    }, function() {
        $(this).children('.onHover').fadeOut();
    });

    //////// JQuery Form ///////////

    $('.contact .contact-us .form-input').focus(function() {
        $(this).parents('.contact .contact-us .form-group').addClass('focused');
    });

    $('.contact .contact-us .form-input').blur(function() {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.contact .contact-us .form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })

    /////// Nice Scroll /////////

    $("html").niceScroll();

    ///////// SCROLL TOP BUTTUN ///////

    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //  console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

});