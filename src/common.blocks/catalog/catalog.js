const catalogBtn = $('.js-catalog-btn');
const catalogEl = $('.catalog');
const closeBtn = $('.js-close-btn');
const bodyEl = $('body');

catalogBtn.on('click', (e) => {
  e.preventDefault(e);
  if (bodyEl.attr('class')) {
    bodyEl.removeAttr('class');
  }

  bodyEl.addClass('no-scrolling');
  catalogEl.addClass('is-opened');

  if (bodyEl.hasClass('no-scrolling')) {
    closeBtn.on('click', () => {
      e.preventDefault();
      bodyEl.removeClass('no-scrolling');
      catalogEl.removeClass('is-opened');
    });
  }
});

const labelMob = $('.js-label-mobile');

if ($(window).width() <= 768) {
  labelMob.each(() => {
    labelMob.on('click', (e) => {
      e.preventDefault();
      const target = $(e.currentTarget);
      target.toggleClass('active');
    });
  });
}

