$(document).ready(function  () {
    init();

});


 

function init(){
    revolutionalSlider();
    owlCarousel();
    popup();
    back2top();
    mixitup();
    // vslider();
    // countdown();
    // counter();
}
function mixitup(){
$('#contain').mixItUp({
});
}

function revolutionalSlider(){
    jQuery(document).ready(function(){
      jQuery('.fullscreenbanner').revolution({
         delay:4000,
         startwidth:960,
         startheight:500,
         autoHeight:"ona",
         fullScreenAlignForce:"off",
 
         onHoverStop:"on",
 
         thumbWidth:100,
         thumbHeight:50,
         thumbAmount:3,
 
         hideThumbsOnMobile:"off",
         hideBulletsOnMobile:"off",
         hideArrowsOnMobile:"off",
         hideThumbsUnderResoluition:0,
 
         hideThumbs:0,
         hideTimerBar:"off",
 
         keyboardNavigation:"off",
 
         navigationType:"off",
         navigationArrows:"off",
         navigationStyle:"off",
 
         navigationHAlign:"center",
         navigationVAlign:"bottom",
         navigationHOffset:30,
         navigationVOffset:30,
 
         soloArrowLeftHalign:"left",
         soloArrowLeftValign:"center",
         soloArrowLeftHOffset:20,
         soloArrowLeftVOffset:0,
 
         soloArrowRightHalign:"right",
         soloArrowRightValign:"center",
         soloArrowRightHOffset:20,
         soloArrowRightVOffset:0,
 
 
         touchenabled:"on",
         swipe_velocity:"0.7",
         swipe_max_touches:"1",
         swipe_min_touches:"1",
         drag_block_vertical:"false",
 
         stopAtSlide:-1,
         stopAfterLoops:-1,
         hideCaptionAtLimit:0,
         hideAllCaptionAtLilmit:0,
         hideSliderAtLimit:0,
 
         dottedOverlay:"none",
 
         fullWidth:"off",
         forceFullWidth:"off",
         fullScreen:"off",
         fullScreenOffsetContainer:"#topheader-to-offset",
 
         shadow:0,
      });
   });
}

function owlCarousel(){
    $("#owl").owlCarousel({
        items: 4,
        itemsTablet: [1215, 1],
        itemsTabletSmall: [497, 1],
        autoPlay: true,
        responsive: true,
        responsiveRefreshRate:100,
        responsiveBaseWidth: window,
        autoHeight: true,
        pagination: false,
        paginationNumbers:false,
        navigation: false,
    });
    $("#owl1").owlCarousel({
        items: 2,
        itemsTablet: [1215, 1],
        itemsTabletSmall: [497, 1],
        autoPlay: true,
        responsive: true,
        responsiveRefreshRate:100,
        responsiveBaseWidth: window,
        autoHeight: true,
        pagination: false,
        paginationNumbers:false,
        navigation: false,
        navigationText: ["PREV","NEXT"],
    });
}

function popup(){
    $('.gallery').each(function(){
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: false
        },
        image: {
            titleSrc: function (item){
                return item.el.attr('captions');
            },
        },
    });
});
}

function back2top(){
    // height -> scrollTop > height.
    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();
        height = $(window).height();
        element = $("#backtotop");
        // display 
        if(scrollTop > height) {
        element.fadeIn('slow');
        } else {
        element.fadeOut('slow');
        }
    });
    scrollTop = $(window).scrollTop();
    height = $(window).height();
    element = $("#backtotop");
    if(scrollTop > height) {
    element.fadeIn();
    } else {
    element.fadeOut();
    }
    $('#backtotop').click(function(){
    $('html, body').animate({scrollTop: 0}, 800);
    });
}

// function vslider(){

// $("#v-slider").vegas({

//     slides: [
//         { src: "img/slider/0.jpg" },
//         { src: "img/slider/1.jpg" },
//         { src: "img/slider/2.jpg" },
//         { src: "img/slider/3.jpg" },
//         { src: "img/slider/4.jpg" },
//         { src: "img/slider/5.jpg" },
//         { src: "img/slider/6.jpg" },
//         { src: "img/slider/7.jpg" },
//         { src: "img/slider/8.jpg" },

//     ],
//     opacity: 0.8,
//     delay: 7000,
//     timer: false,
//     shuffle: true,
//     firstTransition: 'fade',
//     firstTransitionDuration: 5000,
//     transitionDuration: 3000,
//     animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
// });
// }

// function countdown() {
//     $(document).ready(function () {
//         $('.timer').countdown('2018/03/25', function(event) {     
//             $(this).find('.days').text(event.strftime('%D'));
//             $(this).find('.hours').text(event.strftime('%H'));
//             $(this).find('.minutes').text(event.strftime('%M'));
//             $(this).find('.seconds').text(event.strftime('%S'));
//         }); 
//     });
// };

// function counter(){
//     jQuery(document).ready(function($) {
//         $('.counter').counterUp({
//             delay: 10,
//             time: 1000,
//         });
//     });
// }