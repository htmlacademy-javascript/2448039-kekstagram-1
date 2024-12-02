import {isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const photoUpload = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const chanelButton = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const HASHTAG_MAX_COUNT = 5;
const VALIDATE_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TEXT_ERROR = 'Неверно заполнен хэштег';

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text',
});

const getValidCount = (hashtags) => hashtags.length <= HASHTAG_MAX_COUNT;

const getUniqueHashtags = (hashtags) => {
  const lowerCaseHashtags = hashtags.map((tag) => tag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

const isValidHashtag = (tag) => VALIDATE_SYMBOLS.test(tag);

const validateHashtags = (value) => {
  const hashtags = value.trim().split(' ')
    .filter((tag) => tag.trim().length);
  return getValidCount(hashtags) && getUniqueHashtags(hashtags) && hashtags.every(isValidHashtag);
};

pristine.addValidator(
  hashtagField,
  validateHashtags,
  TEXT_ERROR
);

const openRedactorModal = () => {
  photoUpload.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeRedactorModal = () => {
  photoUpload.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
};

const onChanelButtonClick = () => {
  closeRedactorModal();
};

const onUploadFileChange = () => {
  openRedactorModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

chanelButton.addEventListener('click', onChanelButtonClick);
uploadFile.addEventListener('change', onUploadFileChange);
form.addEventListener('submit', onFormSubmit);

const isFormFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt) && !isFormFieldFocused()) {
    evt.preventDefault();
    closeRedactorModal();
  }
}