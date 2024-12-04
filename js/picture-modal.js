import { renderThumbnails } from './thumbnail.js';
import { openBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const onContainerClick = (pictures) => (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (thumbnail) {
    const picture = pictures.find((item) =>
      item.id === +thumbnail.dataset.thumbnailId
    );
    openBigPicture(picture);
  }
};

const renderPictures = (pictures) => {
  renderThumbnails(pictures, container);
  container.removeEventListener('click', onContainerClick(pictures));
  container.addEventListener('click', onContainerClick(pictures));
};

export {renderPictures};
