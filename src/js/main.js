(function(window, document) {
    var $ = require('jquery');

    var $body = $('body');
    var navMenuBtn = $('.js-nav-menu-btn');
    var mobileNavList = $('.js-mobile-nav-list li');
    var mobileNavLinks = $('.js-mobile-nav-list li a');

    function init() {
        navMenuBtn.on('click', toggleMenu);
        mobileNavLinks.on('click', toggleMenu);
    }

    function toggleMenu() {
        $body.toggleClass('js-nav-open');
    }

    if( ~['complete', 'interactive'].indexOf(document.readyState)) {
        init();
    }
})(window, document);
