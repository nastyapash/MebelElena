$(document).ready(function(){

    $(".autoplay-carousel").owlCarousel( {
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        autoWidth:false
    });

    $(".carousel").owlCarousel( {
        items: 3,
        nav: true,
        loop: true,
        margin: 15,
        responsive: {
            1600: {
                items: 3
            },
            1200: {
                items: 3
            },
            992 : {
                items: 2
            },
            768 : {
                items: 1
            },
            570 : {
                items: 1
            }
        }
    });

    $('#burger-menu').on('click', function() {
        $('#menu').toggleClass('active-menu');
    });
    $('.go-to').on('click', function(){
        $("#menu").removeClass("active-menu");
    });

    $("#phone").on('click', function() {
        $(this).mask("8(999) 999-9999");
    });

    var x = $('#modalForm');
    x[0].fancybox();


});