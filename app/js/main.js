$(function() {
  $('.slider').slick({
    dots: true,
    autoplay: false,
    arrows: false,
  });


  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__list-item').on('click', function() {
    $('.menu__list').removeClass('menu__list--active');
    $('.menu__btn').removeClass('menu__btn--active');
  });

});