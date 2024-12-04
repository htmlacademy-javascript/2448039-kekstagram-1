import { isEscapeKey } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt, errorElement) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage(errorElement);
  }
};

const onErrorButtonClick = (errorElement) => {
  closeErrorMessage(errorElement);
};

const showErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);

  document.addEventListener('keydown', (evt) => {
    onDocumentKeydown(evt, errorElement);
  });

  const errorButton = errorElement.querySelector('.error__button');
  errorButton.addEventListener('click', () => onErrorButtonClick(errorElement));

  errorElement.addEventListener('click', (evt) => {
    if (evt.target === errorElement) {
      closeErrorMessage(errorElement);
    }
  });
};

function closeErrorMessage (successElement) {
  successElement.remove();
  document.removeEventListener('keydown', (evt) => {
    onDocumentKeydown(evt, successElement);
  });
}

export {showErrorMessage};
