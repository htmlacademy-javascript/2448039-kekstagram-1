import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
let errorElement;

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
  if (errorElement) {
    return;
  }
  errorElement = errorTemplate.cloneNode(true);
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
  if (errorElement) {
    errorElement.remove();
    errorElement = null;
  }
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {showErrorMessage};
