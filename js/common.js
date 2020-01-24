$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.rec-left').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    });
  } else if ($(window).width() > 578){
    $('.rec-left').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    });
  }
   else {
    $('.rec-left').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    });
  }

  if ($(window).width() > 992) {
    $('.feed-wrap-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true
    });
  } else {
    $('.feed-wrap-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false
    });
  }



    $('.burger').on('click', () => {
      $('.burger').toggleClass('burger-active');
      $('.header-bot-wrap-menu').slideToggle(600);
      $('.header-top').fadeToggle(600);
    });
});