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

if (is_mobile) {
    document.getElementsByTagName('html')[0].classList.add('is-mobile');
}

//disable zoom on mobile device
document.documentElement.addEventListener('touchstart', function (event) {
   if (event.touches.length > 1) {
       event.preventDefault();
   }
}, false);

jQuery.fn.reset = function () {
    this[0].reset();
    this.find('.valid').removeClass('valid');
    return this;
};

//jquery scripts

$(document).ready(function() {
    //hamburger menu
    var mobileButton = $('.js-hamburger');
    var body = $('body');
    var activeClass = 'mobile-menu-opened';

    mobileButton.on('click', function () {
       if (!body.hasClass(activeClass)) {
           body.addClass(activeClass);
       } else {
           body.removeClass(activeClass);
       }
    });
    //hamburger menu
});
