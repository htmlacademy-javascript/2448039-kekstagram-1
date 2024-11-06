import {getRandomInteger, getIdGenerator, getRandomArrayElement, getUniqueRandomId} from './util.js';

const PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 17;
const AVATAR_COUNT = 6;

const DESCRIPTIONS = [
  'Так я вижу свой отдых',
  'Что может быть лучше природной красоты?',
  'Фото достойное внимания',
  'Наслаждение выглядит именно так',
  'Это было весело',
  'Завараживающий вид',
  'Сейчас бы вкусно перекусить',
  'Скорее в отпуск!!!',
  'То, что мне сейчас необходимо',
  'Обожаю эти оттенки',
  'Где-то в райском уголке',
  'Не могла не сфотогрировать это',
  'Как же прекрасно!',
  'Красота в деталях',
  'Так выглядят мои мечты',
  'Сейчас бы умчаться за горизонт',
  'Это должен увидеть каждый!',
  'Давно так не смеялась)))',
  'Здесь лучшее место, которое я видела',
  'Красота в глазах смотрящего',
  'Сколько ярких оттенков!',
  'Люблю это место',
  'На краю земли',
  'Магическое место',
  'Запечтлила этот вид на фото',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Кекс',
  'Манюня',
  'Пирожок',
  'Соня',
  'Филя',
  'Пушистик',
  'Шелл'
];

const generatePhotoId = getIdGenerator();
const generateCommentId = getIdGenerator();
const generateUrl = getUniqueRandomId (1, PHOTO_COUNT);
//const generateAvatar = getUniqueRandomId (1, PHOTO_COUNT);

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENT_COUNT)}, createComment),
});

const getArrayPhoto = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export {getArrayPhoto, createComment, COMMENT_COUNT};
