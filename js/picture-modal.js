import { renderThumbnails } from './thumbnail.js';
import { openBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');
let pictures;

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (thumbnail) {
    const picture = pictures.find((item) =>
      item.id === +thumbnail.dataset.thumbnailId
    );
    openBigPicture(picture);
  }
};

const renderPictures = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export {renderPictures};
