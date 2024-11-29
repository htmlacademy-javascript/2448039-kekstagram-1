//import {getArrayPhoto} from './data.js';
import {renderPictures} from './picture-modal.js';
import { setUserFormSubmit, closeRedactorModal } from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(closeRedactorModal);
//renderPictures(getArrayPhoto());
