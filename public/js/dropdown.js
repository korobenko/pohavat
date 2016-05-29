'use strict';  

    var DropDown = {

        init: function() {
            this.events();
        },

        toggle: function(event, element) {
            event.stopPropagation();
            event.preventDefault();

            jQuery('.dropdown').not(element).removeClass('active');
            element.toggleClass('active');

            jQuery('html').one('click', function() {
                jQuery('.dropdown').removeClass('active');
            });
        },

        events: function() {
        	jQuery('[data-dropdown]').click(function(event) {
        		var element = jQuery(this).closest('.dropdown');

                DropDown.toggle(event, element);
        	});

            jQuery('.dropdown__menu').click(function(event) {
	            event.stopPropagation();
	        });
        }
    }

    jQuery(function() {
        DropDown.init();
    });