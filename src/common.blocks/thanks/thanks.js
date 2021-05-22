// обработчик написан для примера всплытия
// модального окна при успешой отправки
// формы. Удалить перед сборкой
$('.js-submit').on('click', () => {
  $('body').addClass('no-scrolling');
  $('.thanks').addClass('is-opened');
  $('body').on('click', () => {
    $('body').removeClass('no-scrolling');
    $('.thanks').removeClass('is-opened');
  });
  return false;
});
