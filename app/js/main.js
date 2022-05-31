$(function() {
  $('.slider').slick({
    dots: true,
    autoplay: false,
    arrows: false,
  });


  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');

  });

});