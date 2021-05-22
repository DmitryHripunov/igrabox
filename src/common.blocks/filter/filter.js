import noUiSlider from 'nouislider/distribute/nouislider';
import wNumb from 'wnumb/wNumb';

const filterBtn = $('.js-acc-btn');
const filterList = $('.js-acc-content');
const filterBtnReset = $('.js-filter-btn-reset');

filterBtn.on('click', (e) => {
  const curTarget = e.currentTarget;
  const slideItem = $(curTarget).siblings(filterList);
  $(curTarget).toggleClass('is-active');
  slideItem.slideToggle(200);
});

function formRefresh() {
  const form = $('#js-form').closest('form');
  const params = form.serialize();
  const curUrl = `${location.protocol}//${location.host}${location.pathname}`;
  const path = `${curUrl}?${params}`;
  $.ajax({
    method: 'GET',
    url: path,
    dataType: 'json',
  }).done((data) => {
    $('').html(data.label_panel);
    $('').html(data.product_list);
    $('').html(data.pages);
  });
}

$(document).ready(() => {
  const priceControlList = document.querySelectorAll('.range-slider');

  if (priceControlList.length) {
    for (let i = 0; i < priceControlList.length; i++) {
      const keypressSlider = priceControlList[i].querySelector('.range-control');
      const input0 = priceControlList[i].querySelector('.range-input-0');
      const input1 = priceControlList[i].querySelector('.range-input-1');
      const inputs = [input0, input1];
      const noUiSliderMin = Number(input0.getAttribute('data-price-min'));
      const noUiSliderMax = Number(input1.getAttribute('data-price-max'));
      let noUiSliderCurrentMin = Number(input0.getAttribute('data-price-current-min'));
      let noUiSliderCurrentMax = Number(input1.getAttribute('data-price-current-max'));

      if (noUiSliderCurrentMin === '') {
        noUiSliderCurrentMin = noUiSliderMin;
      }

      if (noUiSliderCurrentMax === '') {
        noUiSliderCurrentMax = noUiSliderMax;
      }
      // input0.setAttribute('data-price-current-min', noUiSliderMin);
      // input1.setAttribute('data-price-current-min', noUiSliderMax);

      noUiSlider.create(keypressSlider, {
        start: [noUiSliderCurrentMin, noUiSliderCurrentMax],
        connect: true,
        // tooltips: [true, wNumb({decimals: 1})],
        format: wNumb({
          decimals: 0,
          // thousand: ' ',
          // suffix: ' СЂ'
        }),
        range: {
          min: noUiSliderMin,
          max: noUiSliderMax,
        },
      });
      keypressSlider.noUiSlider.on('update', (values, handle) => {
        inputs[handle].value = values[handle];
      }); // Listen to keydown events on the input field.
      keypressSlider.noUiSlider.on('change', () => {
        formRefresh();
      });
      inputs.forEach((input, handle) => {
        input.addEventListener('change', (e) => {
          keypressSlider.noUiSlider.setHandle(handle, e.target.value);
        });
        input.addEventListener('keydown', (e) => {
          const values = keypressSlider.noUiSlider.get();
          const value = Number(values[handle]);
          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

          const steps = keypressSlider.noUiSlider.steps(); // [down, up]

          const step = steps[handle];
          let [position38, position40] = step;
          // 13 is enter,
          // 38 is key up,
          // 40 is key down.

          switch (e.which) {
            case 13:
              keypressSlider.noUiSlider.setHandle(handle, e.target.value);
              break;
            // The following case clauses are wrapped into blocks using brackets
            case 38:
              // Get step to go increase slider value (up)
              // let position = step[1]; // false = no step is set
              // position = step[1]; // false = no step is set

              if (position38 === false) {
                position38 = 1;
              } // null = edge of slider
              if (position38 !== null) {
                keypressSlider.noUiSlider.setHandle(handle, value + position38);
              }

              break;

            case 40:
              // position = step[0]; // false = no step is set
              // position = step[0];

              if (position40 === false) {
                position40 = 1;
              }

              if (position40 !== null) {
                keypressSlider.noUiSlider.setHandle(handle, value - position40);
              }

              break;

            // no default
          }
        });
      });
      filterBtnReset.on('click', () => {
        keypressSlider.noUiSlider.reset();
      });
    }
  }
});

