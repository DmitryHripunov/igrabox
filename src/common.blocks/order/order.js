const cardBtn = $('.js-card-action');
const popupElem = $('.order');
const bodyEl = $('body');
const inputElem = $('.counter__field');
const inputValue = inputElem.attr('min');

cardBtn.on('click', (e) => {
  e.preventDefault(e);
  if (bodyEl.attr('class')) {
    bodyEl.removeAttr('class');
  }

  const prelodItem = $(e.currentTarget);
  prelodItem.addClass('btn_preloader');

  setTimeout(() => {
    bodyEl.addClass('no-scrolling');
    popupElem.addClass('is-opened');
    prelodItem.removeClass('btn_preloader');
  }, 2000);
});

$(document).on('keydown', (e) => {
  if (e.key === 'Escape' || e.keyCode === 27) {
    bodyEl.removeClass('no-scrolling');
    popupElem.removeClass('is-opened');
    inputElem.val(inputValue);
  }
});

popupElem.on('click', (e) => {
  if (!e.target.closest('.order__content') || e.target.closest('.js-order-close')) {
    bodyEl.removeClass('no-scrolling');
    popupElem.removeClass('is-opened');
    inputElem.val(inputValue);
  }
});
