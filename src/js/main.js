(function(window, document) {
    var $ = require('jquery');

    var $body           = $('body'),
        navMenuBtn      = $('.js-nav-menu-btn'),
        mobileNavList   = $('.js-mobile-nav-list li'),
        mobileNavLinks  = $('.js-mobile-nav-list li a'),
        stickyHeader    = $('.js-nav-desktop');

    function init() {
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

    if( ~['complete', 'interactive'].indexOf(document.readyState)) {
        init();
    }
})(window, document);
