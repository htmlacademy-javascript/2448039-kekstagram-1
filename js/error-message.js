import { isEscapeKey } from './util.js';
import { closeRedactorModal } from './form.js';

const errorElement = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onErrorButtonClick = () => {
  closeErrorMessage();
};

const showErrorMessage = () => {
  document.body.append(errorElement);
  document.addEventListener('keydown', onDocumentKeydown);

  const errorButton = errorElement.querySelector('.error__button');
  errorButton.addEventListener('click', onErrorButtonClick);

  errorElement.addEventListener('click', (evt) => {
    if (evt.target === errorElement) {
      closeErrorMessage();
    }
  });
};

function closeErrorMessage () {
  errorElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeRedactorModal);
}

export {showErrorMessage};
