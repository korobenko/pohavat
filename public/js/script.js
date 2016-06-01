'use strict';    

    /*mobile*/
    var useragents=['android','astel','audiovox','blackberry','chtml','docomo','ericsson','hand','iphone ','ipod','2me','ava','j-phone','kddi','lg','midp','mini','minimo','mobi','mobile','mobileexplorer','mot-e','motorola','mot-v','netfront','nokia', 'palm','palmos','palmsource','pda','pdxgw','phone','plucker','portable','portalmmm','sagem','samsung','sanyo','sgh','sharp','sie-m','sie-s','smartphone','softbank','sprint','symbian','telit','tsm','vodafone','wap','windowsce','wml','xiino'];

    var agt=navigator.userAgent.toLowerCase();
    var is_mobile=false;
      for(var i=0;i<useragents.length;i++){
        if(agt.indexOf(useragents[i])!=-1){
          is_mobile=true;
          var user_agent=agt; break;
        }
      }
    /*!mobile*/

    function throttle (callback, limit) {
        var wait = false;                  // Initially, we're not waiting

        return function () {               // We return a throttled function
            if (!wait) {                   // If we're not waiting
                callback.call();           // Execute users function
                wait = true;               // Prevent future invocations
                setTimeout(function () {   // After a period of time
                    wait = false;          // And allow future invocations
                }, limit);
            }
        }
    }

    function toggle_fav(self) {
        self.toggleClass('active');
    }

    jQuery(function() {

        jQuery(document).on('scroll', throttle(function() {
            
        }, 300));

        //search
        jQuery('.main__search--input').keyup(function () {
            var value = jQuery(this).val();

            if (value.length >=3 ) {
                jQuery('.search__sub').show();
            } else {
                jQuery('.search__sub').hide();
            }
        });

        //add or remove from fav
        jQuery('html').on('click', '.add__favorite', function() {
            toggle_fav( jQuery(this) );
        });

        //popup
        jQuery('#login').on('show.popup', function() {
            console.log('popup is show');
        });
        jQuery('#login').on('hide.popup', function() {
            console.log('popup is hide');
        });

        //Popup.show('#login');
        //Popup.hide('#login');

    });