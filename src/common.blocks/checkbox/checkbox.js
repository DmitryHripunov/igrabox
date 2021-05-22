const checkAll = $('.js-check-all');
const inputCheckAll = $('.js-check');
const controlCheckbox = $('.products-line__item .checkbox__input');

checkAll.on('click', () => {
  if (inputCheckAll.is(':checked')) {
    controlCheckbox.prop('checked', true);
  } else {
    controlCheckbox.prop('checked', false);
  }
});
