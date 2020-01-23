$(document).ready(function () {
  if ($(window).width() > 992) {
    $('.rec-left').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    });
  } else {
    $('.rec-left').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    });
  }

 
    $('.feed-wrap-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true
    });
 
});