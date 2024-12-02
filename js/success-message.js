import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const onDocumentKeydown = (evt, successElement) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage(successElement);
  }
};

const onSuccessButtonClick = (successElement) => {
  closeSuccessMessage(successElement);
};

const showSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  document.addEventListener('keydown', (evt) => {
    onDocumentKeydown(evt, successElement);
  });

  const successButton = successElement.querySelector('.success__button');
  successButton.addEventListener('click', () => onSuccessButtonClick(successElement));

  //closeRedactorModal();

  successElement.addEventListener('click', (evt) => {
    if (evt.target === successElement) {
      closeSuccessMessage(successElement);
    }
  });
};

function closeSuccessMessage (successElement) {
  successElement.remove();
  document.removeEventListener('keydown', (evt) => {
    onDocumentKeydown(evt, successElement);
  });
}

export {showSuccessMessage};
