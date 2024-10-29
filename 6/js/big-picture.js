import './thumbnail.js';
import { isEscapeKey, isEnterKey } from './util.js';

const bodyElement = document.querySelector('body');
const container = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const renderPicturesValues = ({url, description, likes}) => {
  bigPictureElement.querySelector('.big-picture__img').src = url;
  bigPictureElement.querySelector('.big-picture__img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  //bigPictureElement.querySelector('.comments-count').textContent = comments;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPicturesValues(data);
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//container.addEventListener('click', () => {
// openBigPucture();
//});

container.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPicture();
  }
});

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
