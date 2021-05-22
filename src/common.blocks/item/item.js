/* eslint-disable */

const galleryThumbs = new Swiper('.js-item-thumbs', {
  spaceBetween: 16,
  slidesPerView: 'auto',
  loop: true,
  loopedSlides: 'auto',
});

const itemSwiper = new Swiper('.js-item-slide', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.item__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.item_next',
    prevEl: '.item_prev',
  },

  thumbs: {
    swiper: galleryThumbs,
  },
});

const itemMoreSwiper = new Swiper('.js-item-products', {
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 24,
  loop:  true,

  pagination: {
    el: '.item__products_pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.item-products_next',
    prevEl: '.item-products_prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  }
});
