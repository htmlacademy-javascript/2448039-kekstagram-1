//import {getArrayPhoto} from './data.js';
import {renderPictures} from './picture-modal.js';
import { setUserFormSubmit} from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessMessage } from './message.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(showSuccessMessage);
//renderPictures(getArrayPhoto());
