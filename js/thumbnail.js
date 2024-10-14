import { getArrayPhoto} from './data.js';

const container = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnails = getArrayPhoto();

const thumbnailsFragment = document.createDocumentFragment();

thumbnails.forEach(({url, likes, comments}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailsFragment.appendChild(thumbnailElement);
});

container.appendChild(thumbnailsFragment);
