/* eslint-disable */

const heroSwiper = new Swiper('.js-hero-swipre', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1,
  loop:  true,

  navigation: {
    nextEl: '.hero__btn_next',
    prevEl: '.hero__btn_prev',
  },
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true
  },
});
