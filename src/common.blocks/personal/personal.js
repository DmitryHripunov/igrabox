const personalTabBtn = $('.js-personal-btn');

// eslint-disable-next-line func-names
personalTabBtn.on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');
  $('.personal__section').removeClass('is-active');
  $(href).addClass('is-active');

  $('.js-personal-btn').removeClass('is-active');
  $(this).addClass('is-active');
});


const personalBtn = $('.js-personal-acc');
const personalList = $('.js-personal-content');

personalBtn.on('click', (e) => {
  const curTarget = e.currentTarget;
  const slideItem = $(curTarget).siblings(personalList);
  $(curTarget).toggleClass('is-hidden');
  slideItem.slideToggle(200);
});
