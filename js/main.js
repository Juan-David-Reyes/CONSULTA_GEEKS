$(document).ready(function(){

    // FOOTER CLICK MOVILE

    $('#link_f1').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active_nav');
    })
    $('#link_f2').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active_nav');
    })

});