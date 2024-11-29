//import {getArrayPhoto} from './data.js';
import {renderPictures} from './picture-modal.js';
import './form.js';
import { getData } from './api.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  });

//renderPictures(getArrayPhoto());
