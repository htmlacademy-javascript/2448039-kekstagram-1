import { renderPictures } from './picture-modal.js';
import { setUserFormSubmit} from './form.js';
import { getData} from './api.js';
import { showAlert, debounce} from './util.js';
import { showSuccessMessage } from './success-message.js';
import { showErrorMessage } from './error-message.js';
import { getFilteredPictures, init } from './filter.js';

getData()
  .then((loaderPictures) => {
    const debounceRenderPictures = debounce((pictures) => {
      renderPictures(pictures);
    });
    init(loaderPictures, () => {
      const filteredPictures = getFilteredPictures();
      debounceRenderPictures(filteredPictures);
    });
    renderPictures(getFilteredPictures());
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
