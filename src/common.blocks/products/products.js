/* eslint-disable */

const newProductSwiper = new Swiper('.js-new-products', {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 5,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 8,
    },

    1024: {
      slidesPerView: 4,
    },
  },
  
  pagination: {
    el: '.new-products_pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.new-products_next',
    prevEl: '.new-products_prev',
  },
});

const buyProductSwiper = new Swiper('.js-buy-products', {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 5,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 8,
    },

    1024: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: '.buy-products_next',
    prevEl: '.buy-products_prev',
  },

  pagination: {
    el: '.buy-products_pagination',
    clickable: true
  },
});
