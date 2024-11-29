//import {getArrayPhoto} from './data.js';
import {renderPictures} from './picture-modal.js';
import './form.js';

fetch ('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    renderPictures(pictures);
  });

//renderPictures(getArrayPhoto());
