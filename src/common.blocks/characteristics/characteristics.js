const descBtnEl = $('.js-desc-btn');
const spoilerEl = $('.js-desc-spoiler');
const textHight = $('.characteristics__desc').height();
// const descTextHeight = 260;
// const wrapperTextHeight = $('.characteristics__text-wrapper').height();

$(document).ready(() => {
  if ($(window).width() >= 768) {
    $('.section-grid__aside').css('margin-bottom', textHight);
  }
});

descBtnEl.on('click', () => {
  const target = descBtnEl.siblings('.js-desc');

  target.toggleClass('is-active');
  if (target.hasClass('is-active')) {
    spoilerEl.html('Свернуть');
  } else {
    spoilerEl.html('Развернуть');
  }

  if ($(window).width() >= 768) {
    if (target.hasClass('is-active')) {
      $('.section-grid').css('padding-bottom', textHight);
      // $('.section-grid__aside').css('margin-bottom', textHight);
    } else {
      $('.section-grid').css('padding-bottom', 0);
      // $('.section-grid__aside').css('margin-bottom', textHight);
    }
  }
});
