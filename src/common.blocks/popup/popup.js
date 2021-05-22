const commentsWrite = $('.js-popup');
const closeBtn = $('.js-close-btn');
const bodyEl = $('body');

commentsWrite.on('click', () => {
  // e.preventDefault(e);

  bodyEl.addClass('no-scrolling');
  $('.popup').addClass('is-opened');

  if (bodyEl.hasClass('no-scrolling')) {
    $('.popup.is-opened').on('click', (e) => {
      const current = $(e.target).closest('.popup__content').length;

      if (!current) {
        bodyEl.removeClass('no-scrolling');
        $('.popup').removeClass('is-opened');
      }
    });

    closeBtn.on('click', () => {
      bodyEl.removeClass('no-scrolling');
      $('.popup').removeClass('is-opened');
    });
  }
});
