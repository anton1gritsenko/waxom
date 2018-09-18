$(document).ready(function(){
    $('.hero-slider').slick({
        dots: true,
        arrows:false,
});

    $('.slider').slick({
        arrows: false,
        centerMode: true,
        infinite: true,
        centerPadding: '300px',
        slidesToShow: 1,
        speed: 500,
        dots: false,
    });
    $('.photo-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

$('.toggle-menu').on('click', function(){
    $('.main-menu').stop().slideToggle();
});

});
