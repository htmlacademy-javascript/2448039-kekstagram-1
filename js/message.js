import { closeRedactorModal } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const onSuccessButtonClick = (successElement) => {
  closeSuccessMessage(successElement);
};

const showSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  const successButton = successElement.querySelector('.success__button');
  successButton.addEventListener('click', () => onSuccessButtonClick(successElement));

  closeRedactorModal();
};

function closeSuccessMessage (successElement) {
  successElement.remove();
}


export {showSuccessMessage};
