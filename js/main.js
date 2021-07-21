$(document).ready(function(){
    $(".carousel").slick({
        accessibility:true,
        adaptiveHeight:false,
        autoplay:true,
        autoplaySpeed:1500,
        infinite:true,
        speed:500,
        easing:"ease-out",
        lazyLoad:'ondemand',
        slidesToShow:5,
        slidesToScroll: 1,
        arrows:true,
    });
})

