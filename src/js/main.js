(function(window, document) {
    var $ = require('jquery');
    require('jquery.scrollto');

    var $window         = $(window),
        $body           = $('body'),
        navMenuBtn      = $('.js-nav-menu-btn'),
        mobileNavList   = $('.js-mobile-nav-list li'),
        mobileNavLinks  = $('.js-mobile-nav-list li a'),
        stickyHeader    = $('.js-nav-desktop'),
        animEl          = $('.js-anim-el');

    function init() {
        animateScroll();
        navMenuBtn.on('click', toggleMenu);
        mobileNavLinks.on('click', toggleMenu);
        $window.on('scroll resize', function() {
            stickyNav(stickyHeader);
            checkIfInView();
        });
        $window.trigger('scroll');
    }

    function checkIfInView() {
        var windowHeight = $window.height(),
            windowTopPos = $window.scrollTop(),
            windowBotPos = windowTopPos + windowHeight;
            // adjust to center 2/3 of window
            windowTopPos = windowTopPos + (windowHeight / 3);
            windowBotPos = windowBotPos - (windowHeight / 3);

        $.each(animEl, function() {
            var el = $(this),
                elHeight = el.outerHeight(),
                elTopPos = el.offset().top,
                elBotPos = elTopPos + elHeight;
            if(elBotPos >= windowTopPos && elTopPos <= windowBotPos && !el.hasClass('in-view')) {
                el.addClass('in-view');
            }
        });
    }

    function toggleMenu() {
        $body.toggleClass('js-nav-open');
    }

    function stickyNav(header) {
		var headerHeight = header.height();
		var scroll = $(window).scrollTop();
		if (scroll > headerHeight) {
			header.addClass('nav-header--stuck');
		} else {
			header.removeClass('nav-header--stuck');
		}
	}

    function animateScroll() {
        $('a[href^="#"]').click(function(e) {
            // Prevent the jump and the #hash from appearing on the address bar
            e.preventDefault();
            // Scroll the window, stop any previous animation, stop on user manual scroll
            // Check https://github.com/flesler/jquery.scrollTo for more customizability
            $(window).stop(true).scrollTo(this.hash, {duration:800, interrupt:false});
        });
    }

    if( ~['complete', 'interactive'].indexOf(document.readyState)) {
        init();
    }
})(window, document);
