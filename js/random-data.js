import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomUniquePositiveInteger, getRandomUniquePositiveIntegerNotRange} from './utils.js';

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

const getuniqueAvatar = getRandomUniquePositiveInteger(1, 10);

const createAuthor = () => {
  const avatarNumber = getuniqueAvatar();
  if (avatarNumber >= 10) {
    return ({
      avatar: `img/avatars/user${avatarNumber}.png`,
    });
  }
  return ({
    avatar: `img/avatars/user${0}${avatarNumber}.png`,
  });
};

const getuniqueFeature = getRandomUniquePositiveIntegerNotRange(FEATURES.length);
const getuniquePhoto = getRandomUniquePositiveIntegerNotRange(PHOTOS_ADDRESS.length);

const getUniqueProposal = (uniqueProposals, uniqueNumber, range) => [...Array(getRandomPositiveInteger(1, range))].map((item = uniqueProposals[uniqueNumber()]) => item);

const createOffer = () => ({
  title: 'Сдается в аренду',
  address: `${getRandomPositiveFloat(35.65000, 35.70000, 5)}, ${getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
  price: getRandomPositiveInteger(1000, MAX_PRICE),
  type: TYPE_OFFERS[getRandomPositiveInteger(0, TYPE_OFFERS.length - 1)],
  rooms: getRandomPositiveInteger(1, MAX_ROOMS),
  guests: getRandomPositiveInteger(1, MAX_GUESTS),
  checkin: CHECKEIN_RANGES[getRandomPositiveInteger(0, CHECKEIN_RANGES.length - 1)],
  checkout: CHECKOUT_RANGES[getRandomPositiveInteger(0, CHECKEIN_RANGES.length - 1)],
  features: getUniqueProposal(FEATURES, getuniqueFeature, FEATURES.length),
  description: 'Замечательная, просторная квартира с прекрасным видом на достопримечальности',
  photos: getUniqueProposal(PHOTOS_ADDRESS, getuniquePhoto, PHOTOS_ADDRESS.length),
});

const createLocation = () => ({
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
});

const createApartment = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation(),
});

export {createApartment};
