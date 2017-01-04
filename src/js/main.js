(function(window, document) {
    var $ = require('jquery');
    require('jquery.scrollto');

    var $body           = $('body'),
        navMenuBtn      = $('.js-nav-menu-btn'),
        mobileNavList   = $('.js-mobile-nav-list li'),
        mobileNavLinks  = $('.js-mobile-nav-list li a'),
        stickyHeader    = $('.js-nav-desktop');

    function init() {
        animateScroll();
        navMenuBtn.on('click', toggleMenu);
        mobileNavLinks.on('click', toggleMenu);
        stickyNav(stickyHeader);
        $(window).bind("scroll mousewheel DOMMouseScroll resize", function() {
            stickyNav(stickyHeader);
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
