$(document).ready(function(){
    $('.hero-slider').slick({
        dots: true,
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
        slidesToScroll: 3
    });

});
