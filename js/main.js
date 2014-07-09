console.log('Jake_Foraker_Resume');

jQuery(document).ready(function($){
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var skyconTop = new Skycons({
        "color": "white"
    });

    //open project sidebar
    $('#cd-team').find('ul a').on('click', function(event){
        event.preventDefault();
        var selected = $(this).data('type');
        $('.cd-member-bio.'+selected+'').addClass('slide-in');
        $('.cd-member-bio-close').addClass('is-visible');
        setTimeout(function(){
            $('.repo').addClass('anim');
        }, 276);

        // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if( is_firefox ) {
            $('main').addClass('slide-out').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                $('body').addClass('overflow-hidden');
            });
        } else {
            $('main').addClass('slide-out');
            $('body').addClass('overflow-hidden');
        }

    });

    //close
    jQuery(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event){
        event.preventDefault();
        $('.cd-member-bio').removeClass('slide-in');
        $('.cd-member-bio-close').removeClass('is-visible');
        setTimeout(function(){
            $('.repo').removeClass('anim');
        }, 476);
        if( is_firefox ) {
            $('main').removeClass('slide-out').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('main').removeClass('slide-out');
            $('body').removeClass('overflow-hidden');
        }
    });

    skyconTop.set( 'icon', 'rain');
    skyconTop.play();
});