const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url, likes, comments, description, id}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const renderThumbnails = (pictures, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const previewFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    previewFragment.append(thumbnail);
  });
  container.append(previewFragment);
};

export {renderThumbnails};
