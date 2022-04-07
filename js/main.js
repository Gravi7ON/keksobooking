const getRandomPositiveInteger = (min, max) => {
  const from = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const to = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (to - from + 1) + from);
};

const getRandomPositiveFloat = (min, max, amountFloat = 1) => {
  const from = Math.min(Math.abs(min), Math.abs(max));
  const to = Math.max(Math.abs(min), Math.abs(max));
  return +(Math.random() * (to - from) + from).toFixed(amountFloat);
};

const getRandomUniquePositiveInteger = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

const getRandomUniquePositiveIntegerNotRange = (amount) => {
  const uniqueNumbers = Array.from({length: amount}).map((value, index) => index);
  uniqueNumbers.sort(() => Math.random() - 0.5);
  return () => {
    if (uniqueNumbers.length === 0) {
      return;
    }
    return uniqueNumbers.pop();
  };
};

const TYPE_OFFERS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKEIN_RANGES = ['12:00', '13:00', '14:00'];
const CHECKOUT_RANGES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ADDRESS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const MAX_PRICE = 5000;
const MAX_ROOMS = 5;
const MAX_GUESTS = 7;
const AMOUNT_APARTMENTS = 10;

const uniqueAvatar = getRandomUniquePositiveInteger(1, 10);

const getAuthor = () => {
  const avatarNumber = uniqueAvatar();
  if (avatarNumber >= 10) {
    return ({
      avatar: `img/avatars/user${avatarNumber}.png`,
    });
  }
  return ({
    avatar: `img/avatars/user${0}${avatarNumber}.png`,
  });
};

const uniqueFeature = getRandomUniquePositiveIntegerNotRange(FEATURES.length);
const uniquePhoto = getRandomUniquePositiveIntegerNotRange(PHOTOS_ADDRESS.length);
const getUniqueProposal = (uniqueProposals, uniqueNumber, range) => [...Array(getRandomPositiveInteger(1, range))].map((item) => item = uniqueProposals[uniqueNumber()]);

const getOffer = () => ({
  title: 'Сдается в аренду',
  address: `${getRandomPositiveFloat(35.65000, 35.70000, 5)}, ${getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
  price: getRandomPositiveInteger(1000, MAX_PRICE),
  type: TYPE_OFFERS[getRandomPositiveInteger(0, TYPE_OFFERS.length - 1)],
  rooms: getRandomPositiveInteger(1, MAX_ROOMS),
  guests: getRandomPositiveInteger(1, MAX_GUESTS),
  checkin: CHECKEIN_RANGES[getRandomPositiveInteger(0, CHECKEIN_RANGES.length - 1)],
  checkout: CHECKOUT_RANGES[getRandomPositiveInteger(0, CHECKEIN_RANGES.length - 1)],
  features: getUniqueProposal(FEATURES, uniqueFeature, FEATURES.length),
  description: 'Замечательная, просторная квартира с прекрасным видом на достопримечальности',
  photos: getUniqueProposal(PHOTOS_ADDRESS, uniquePhoto, PHOTOS_ADDRESS.length),
});

const getLocation = () => ({
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
});

const getApartment = () => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getLocation(),
});

const apartments = Array.from({length: AMOUNT_APARTMENTS}, getApartment);
