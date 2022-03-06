$(document).ready(function(){

    // FOOTER CLICK MOBILE

    $('#link_f1').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active_nav');
    })
    $('#link_f2').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active_nav');
    })

    // MENU MOBILE

    $('.button_nav').click(function(){
        $('nav.navbar').toggleClass('active');
    })
});