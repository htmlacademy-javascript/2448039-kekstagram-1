import {renderPictures} from './picture-modal.js';
import { setUserFormSubmit} from './form.js';
import { getData, ErrorText} from './api.js';
import { showAlert} from './util.js';
import { showSuccessMessage } from './success-message.js';
import { showErrorMessage } from './error-message.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch(() => {
    showAlert(ErrorText.GET_DATA);
  });

setUserFormSubmit((success) => {
  if (success) {
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
});
