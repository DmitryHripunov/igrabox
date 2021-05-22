const filterBtnMobile = $('.js-category-filter-btn_mobile');
const filterEl = $('.filter');
const categoryAsideEl = $('.category__aside');
const closeCatalogBtn = $('.js-close-category');
const bodyEl = $('body');

filterBtnMobile.on('click', (e) => {
  e.preventDefault(e);

  if (bodyEl.attr('class')) {
    bodyEl.removeAttr('class');
  }

  bodyEl.addClass('no-scrolling');
  filterEl.addClass('is-opened');
  categoryAsideEl.addClass('is-active');

  $(document).on('mouseup touchstart', (evt) => {
    if (!filterEl.is(evt.target) &&
      filterEl.has(evt.target).length === 0 &&
      filterEl.hasClass('is-opened')) {
      filterEl.removeClass('is-opened');
      categoryAsideEl.removeClass('is-active');
      bodyEl.removeAttr('class');
    }
  });

  closeCatalogBtn.on('click', () => {
    filterEl.removeClass('is-opened');
    categoryAsideEl.removeClass('is-active');
    bodyEl.removeAttr('class');
  });
});


// tabs
const tabEl = $('.js-filter-tab');

// eslint-disable-next-line func-names
tabEl.on('click', function (e) {
  e.preventDefault();
  const dataHref = $(this).attr('href');
  tabEl.removeClass('is-active');
  $(this).addClass('is-active');

  if (dataHref === '#shop-by-grid') {
    $('.products__container').removeClass('products__container_line').fadeOut(0);
    $('.products__container').addClass('products__container_grid').fadeIn(200);
  }

  if (dataHref === '#shop-by-line') {
    $('.products__container').removeClass('products__container_grid').fadeOut(0);
    $('.products__container').addClass('products__container_line').fadeIn(200);
  }
});
