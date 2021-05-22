const addressEl = $('.js-address-area');
const addressDropEl = $('.address__area_hover');

if ($(window).width() >= 1024) {
  addressEl.on('click', () => {
    addressDropEl.toggleClass('is-active');
  });
}
