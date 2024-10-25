import './thumbnail.js';
import { isEscapeKey, isEnterKey } from './util.js';

const bodyElement = document.querySelector('body');
const container = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPucture () {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

container.addEventListener('click', () => {
  openBigPucture();
});

container.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPucture();
  }
});

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});
