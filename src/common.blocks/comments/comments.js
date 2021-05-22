const commentAnhor = $('.js-commens');
// eslint-disable-next-line func-names
commentAnhor.on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');
  const hrefHeight = $(this).height();
  const offset = $(href).offset().top - hrefHeight;

  $('body,html').animate({
    scrollTop: offset,
  }, 500);
});
