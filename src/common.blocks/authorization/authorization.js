const authBtn = $('.js-authorization');
const closeBtn = $('.js-close-btn');
const bodyEl = $('body');
const forgotBtn = $('.js-forgot');
const dackBtn = $('.js-back');

authBtn.on('click', (e) => {
  e.preventDefault(e);
  if (bodyEl.attr('class')) {
    bodyEl.removeAttr('class');
  }

  bodyEl.addClass('no-scrolling');
  $('.authorization').addClass('is-opened');

  if (bodyEl.hasClass('no-scrolling')) {
    closeBtn.on('click', () => {
      e.preventDefault();
      bodyEl.removeClass('no-scrolling');
      $('.authorization').removeClass('is-opened');
    });
  }
  forgotBtn.on('click', () => {
    e.preventDefault(e);
    $('.authorization').removeClass('is-opened');
    $('.forgot').addClass('is-opened');
    if (bodyEl.hasClass('no-scrolling')) {
      closeBtn.on('click', () => {
        e.preventDefault();
        bodyEl.removeClass('no-scrolling');
        $('.forgot').removeClass('is-opened');
      });
    }
  });

  dackBtn.on('click', () => {
    e.preventDefault(e);
    bodyEl.removeClass('no-scrolling');
    $('.forgot').removeClass('is-opened');
    $('.authorization').removeClass('is-opened');
  });
});
