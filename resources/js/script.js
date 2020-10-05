$(document).ready(function(){

    // For the sticky Navigation
    $(".js--section-features").waypoint(function(direction){
        console.log("nav")
        if(direction=="down")
        {
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },
        {  
                offset: '25%'
});


$(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass('animated fadeIn')
},{  
    offset: '50%'
});

$(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass('animated fadeInUp')
},{  
    offset: '50%'
});

$(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass('animated fadeIn')
},{  
    offset: '50%'
});

$(".js--wp-4").waypoint(function(direction) {
    $(".js--wp-4").addClass('animated pulse')
},{  
    offset: '50%'
});

       // Scroll on buttons
       $(".js--scroll-to-plan").click(function() {
           $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        });

        $(".js--scroll-to-start").click(function() {
            $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
         });

});


    /* Navigation scroll */
    $("#nfeatures").click(function() {
        $('html, body').animate({scrollTop: $('#features').offset().top}, 1000);
     });

     $("#nworks").click(function() {
        $('html, body').animate({scrollTop: $('#works').offset().top}, 1000);
     });

     $("#ncities").click(function() {
        $('html, body').animate({scrollTop: $('#cities').offset().top}, 1000);
     });

     $("#nplans").click(function() {
        $('html, body').animate({scrollTop: $('#plans').offset().top}, 1000);
     });