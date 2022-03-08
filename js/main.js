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

     function homeComoFunciona(){
         let swiper = new Swiper(".swiperComoFunciona", {
             spaceBetween: 20,
             slidesPerView: 1,   
             pagination: {
               el: ".swiperComoFunciona .swiper-pagination",
             },
             breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                // when window width is >= 480px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 20
                }
              }
         });
     }


    HomeHero();
     homeComoFunciona();

});