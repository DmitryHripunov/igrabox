import Choices from 'choices.js';

const payEl = document.querySelector('.js-choice-pay');
const deliveryEl = document.querySelector('.js-choice-delivery');

/* eslint-disable */

if (deliveryEl) {
  const choiceDeliveryEl = new Choices(deliveryEl, {
    searchEnabled: false,
    itemSelectText: '',
    removeItems: false,
    position: 'bottom',
  });
}

if (payEl) {
  const choicePayEl = new Choices(payEl, {
    searchEnabled: false,
    itemSelectText: '',
    removeItems: false,
    position: 'bottom',
  });
}
