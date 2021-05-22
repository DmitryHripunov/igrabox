/* eslint-disable */

const marketingSwiper = new Swiper('.js-marketing', {
  speed: 400,
  spaceBetween: 8,
  slidesPerView: 1,
  loop:  true,

  pagination: {
    el: '.marketing__swiper-pagination',
    clickable: true
  },
});