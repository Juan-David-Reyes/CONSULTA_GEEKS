$(document).ready(function(){

/*   MENU PERFIL */

    $('.link_user_p').click(function(){
      $('.cont_submenu_user').slideToggle();
      $('body').toggleClass('hiddeScroll');
    });

    // ACTIVAR FILTRO MOBILE
    $('.filter_slide').click(function(){

        $('.cont_filter_hero.solo_mobile').toggleClass('activeFilterMobile');
    });
    $('.close_filter_m').click(function(){
      $('.cont_filter_hero.solo_mobile').removeClass('activeFilterMobile');
  }); 
    

    // MENU MOBILE

    $('.button_nav').click(function(){
        $('nav.navbar').toggleClass('active');
        $('body').toggleClass('hiddeScroll');
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

    // ESTILO DE LISTA O GRID SESION ACTIVA BUSQUEDA

    $('.visual_mode .fas.fa-list').click(function(){
      $('.visual_mode span').removeClass('active_c');
      $(this).addClass('active_c');
      $('.geeks_cards').addClass('list-mode');
    });
    $('.visual_mode .fas.fa-th-large').click(function(){
      $('.visual_mode span').removeClass('active_c');
      $(this).addClass('active_c');
      $('.geeks_cards').removeClass('list-mode');
    });

    // HISTORIAL SOLICITUD MOBILE ITEMS

    $('.cont_w100_btn .modal_rechazar').click(function(){
      $('.cont_modal_propuesta').hide();
      $('.cont_modal_propuesta.cont_propuesta_rechazar').show();
    });

    // SUBMENU MENSAJES CHAT

    $('.menu_sms_chat').click(function(){
      $('.cont_submenu_chat').slideToggle();
    });

    // MODAL DETALLE TECNICO

    $('.geeks_cards .card_geek').click(function(){
      $('body').addClass('hiddeScroll');
      $('.bg_modals').fadeIn();
      $('.cont_modal_post_tecnico').addClass('activo');
    });
    $('.cont_modal_post_tecnico .header_close span').click(function(){
      $('body').removeClass('hiddeScroll');
      $('.bg_modals').fadeOut();
      $('.cont_modal_post_tecnico').removeClass('activo');
    });
    

    // CAMBIO MODAL RECHAZAR

    $('.item_h_estado').click(function(){
      $('.item_h_estado').removeClass('active_state');
      $('.slide_down_info').slideUp();
      $(this).toggleClass('active_state');
      $(this).next('.slide_down_info').slideToggle();
    });

    // MODAL PROPUESTA

    $('a.ver_propuesta').click(function(){
      $('.s_modal_propuesta').addClass('modal_act_propuesta');
      $('body').addClass('hiddeScroll');
    });

    $('.cont_modal_propuesta .tit_modal .fa-times').click(function(){
      $('.s_modal_propuesta').removeClass('modal_act_propuesta');
      $('body').removeClass('hiddeScroll');
    });


    // BORDER FOOTER COLOR ARREGLO

    function colorFooter(){
      if($(".iniciar_sesion, .s_mi_perfil").is(":visible")){
          $('body').css('background-color', '#FAFAFA') ;
      }
    }


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

    function homeTestimonios(){
      let swiper = new Swiper(".swiperTestimonios", {
          spaceBetween: 20,
          slidesPerView: 1,   
          pagination: {
            el: ".swiperTestimonios .swiper-pagination",
            clickable: true,
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
          }
      });
  }


    colorFooter();
    homeTestimonios();
    HomeHero();
    homeComoFunciona();

});