import { isEscapeKey } from './util.js';

const photoUpload = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const chanelButton = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');


const openRedactorModal = () => {
  photoUpload.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeRedactorModal = () => {
  photoUpload.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onChanelButtonClick = () => {
  closeRedactorModal();
};

const onUploadFileChange = () => {
  openRedactorModal();
};

chanelButton.addEventListener('click', onChanelButtonClick);
uploadFile.addEventListener('change', onUploadFileChange);

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeRedactorModal();
  }
}
