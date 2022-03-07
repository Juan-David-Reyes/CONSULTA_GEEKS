$(document).ready(function(){

    // MENU MOBILE

    $('.button_nav').click(function(){
        $('nav.navbar').toggleClass('active');
        $('.button_nav .fas').toggleClass('fa-times');
    });

    // FOOTER CLICK MOBILE

    $('#link_f1').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active_nav');
    });
    $('#link_f2').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active_nav');
    });

    // SLIDER HOME HERO

    function HomeHero(){
        let swiper = new Swiper(".homeHero_swiper", {
            parallax: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
              el: ".homeHero_swiper .swiper-pagination",
            },
        });
    }


    HomeHero();
    

});