'use strict';

var Footer = {

    container: 'footer',
    emptyFooter : '#js-footer',

    init: function() {
        this.setHeight();
        this.events();
    },

    setHeight: function() {
        var height = jQuery(Footer.container).innerHeight();

        jQuery(Footer.container).css({
            'height' : height + 'px',
            'marginTop' : '-' + height + 'px'
        });

        jQuery(Footer.emptyFooter).css({
            'height' : height + 'px'
        });
    },

    events: function() {
        jQuery(window).resize(function() {
            Footer.setHeight();
        });
    }

}

jQuery(function() {
    Footer.init();
});