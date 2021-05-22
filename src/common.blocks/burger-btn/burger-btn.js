const burgerBtn = $('.js-burger-btn');
const headerEl = $('.header');
const closeBtn = $('.js-close-btn');
const bodyEl = $('body');

burgerBtn.on('click', (e) => {
  e.preventDefault(e);
  if (bodyEl.attr('class')) {
    bodyEl.removeAttr('class');
  }

  bodyEl.addClass('no-scrolling');
  headerEl.addClass('menu-opened');

  if (bodyEl.hasClass('no-scrolling')) {
    closeBtn.on('click', () => {
      e.preventDefault();
      bodyEl.removeClass('no-scrolling');
      headerEl.removeClass('menu-opened');
    });
  }
});

