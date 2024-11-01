import {getRandomInteger, getIdGenerator, getRandomArrayElement, getUniqueRandomId} from './util.js';

const PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 5;
const AVATAR_COUNT = 6;

const DESCRIPTIONS = [
  'Галечный пляж, окруженный зеленью, с шезлонгами и виднеющимся вдали отелем',
  'Деревянный указатель на пляж - Go to the beach',
  'Лазурное море с белым песком и огромными камнями',
  'Девушка на пляжу в оливковом купальнике фотографирует закат',
  'Улыбающиеся рисовые человечки в супе',
  'Матовый черный спорткар с дверьми, открывающимися вверх',
  'Деревянная тарелочка с десертной вилочкой и клубникой, лежащие на клетчатой салфетке',
  'Два стакана клюквенного морса',
  'Девушка на берегу моря машет низко пролетающему самолету',
  'Выдвижная подставка для обуви с босоножками, балетками и мужскими мокасинами в светло-коричневых тонах',
  'Песчаная тропинка к морю огороженная забором с зеленью',
  'Белая ауди с зелеными фарами в сельской местности',
  'Салат из моркови, огурцов и красной рыбы, нарезанный длинными палочками',
  'Суши-кот - рыжий котик в сырной накидке, лежащий на китайском рисе и обернутый в морскую водоросль',
  'Торчащие ноги на диване в надувных серых домашних уггах',
  'Высоко парящий в небе самолет над скалами',
  'Хор разнонациональных людей одетых в черное, исполняющих песню под руководством дирижёра',
  'Ретро-автомобиль красного цвета в кирпичном здании',
  'Домашние тапочки с фонариком, обутые на женщине и подсвечивающие ящик комода',
  'Ночной вид холла отеля с большими пальмами',
  'Тарелка риса с курицей, овощами и долькой лайма',
  'Влюбленная пара, купающаяся в море на фоне желтого заката',
  'Маленький краб пятнистого окраса в зелени',
  'Концертный зал, где зрители изображают символ треугольника руками',
  'Белый джип, проезжающий в тропическом лесу по затопленной дороге',
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
const generateAvatar = getUniqueRandomId (1, AVATAR_COUNT);

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${generateAvatar()}.svg.`,
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
