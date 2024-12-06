import { isEscapeKey } from './util.js';

const successElement = document.querySelector('#success').content.querySelector('.success');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onSuccessButtonClick = () => {
  closeSuccessMessage();
};

const showSuccessMessage = () => {
  document.body.append(successElement);
  document.addEventListener('keydown', onDocumentKeydown);

  const successButton = successElement.querySelector('.success__button');
  successButton.addEventListener('click', onSuccessButtonClick);

  successElement.addEventListener('click', (evt) => {
    if (evt.target === successElement) {
      closeSuccessMessage();
    }
  });
};

function closeSuccessMessage () {
  successElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {showSuccessMessage};
