/*eslint-disable*/
const contactsInfo = $('.contacts__address');

function init() {
  const markersArr = [];

  for (let i = 0; i < contactsInfo.length; i++) {
    const currLi = contactsInfo.eq(i);

    const currArr = [];

    const currAddress =
      `<h3 class="contacts__address-title balloon">
        ${currLi.closest('.contacts__address').find('.contacts__address-title').text()}
      </h3>
      <a href="tel:200466" class="contacts__address_tel contacts__address-link balloon">
        ${currLi.closest('.contacts__address').find('.contacts__address_tel').html()}
      <a/>
      <a href="mailto:delfin.58@bk.ru" class="contacts__address_email contacts__address-link balloon">
        ${currLi.closest('.contacts__address').find('.contacts__address_email').text()}
      <a/>`;

    currArr.push(currAddress);

    markersArr.push(currArr);
  }

  const map = new ymaps.Map('contacts-map', {
    center: [53.1940437607611, 45.029953499999976],
    zoom: 11,
    
  });

  const coords = [
    [53.121950571274674, 45.00846149999996],
    [53.2351760711901, 44.92808899999998],
  ];

  const markerOptions = {
    iconLayout: 'default#image',
    iconImageHref: '/img/map-icons/pin.svg',
    iconImageSize: [35, 35],

    balloonOffset: [5, -35],
    hideIconOnBalloonOpen: false,
  };

  let markersCollection = new ymaps.GeoObjectCollection({});


  for (let i = 0; i < coords.length; i++) {
    markersCollection.add(new ymaps.Placemark(coords[i], {
      balloonContent: markersArr[i],
    },
      markerOptions
    ));
  }

  map.geoObjects.add(markersCollection);
  // map.controls.remove('zoomControl');
  // map.controls.remove('searchControl');
}

if ($('div').is('#contacts-map')) {
  ymaps.ready(init);
}