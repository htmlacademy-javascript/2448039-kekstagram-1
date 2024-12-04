import { renderPictures } from './picture-modal.js';
import { setUserFormSubmit} from './form.js';
import { getData} from './api.js';
import { showAlert} from './util.js';
import { showSuccessMessage } from './success-message.js';
import { showErrorMessage } from './error-message.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit((success) => {
  if (success) {
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
});
