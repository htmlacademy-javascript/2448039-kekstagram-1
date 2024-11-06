import './thumbnail.js';
import { isEscapeKey, isEnterKey } from './util.js';

const bodyElement = document.querySelector('body');
const container = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const PRIMER_COMMENT = 5;

const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

let visibleComments = 0;


const renderComments = (comments) => {
  visibleComments += PRIMER_COMMENT;

  if (visibleComments >= comments.length) {
    commentsLoader.classList.add('hidden');
    visibleComments = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const previewFragment = document.createDocumentFragment();
  for (let i = 0; i < visibleComments; i++) {
    const commentElement = comments[i];
    const comment = createComment(commentElement);
    previewFragment.append(comment);
  }

  commentList.innerHTML = '';
  commentList.append(previewFragment);
  commentCount.innerHTML = `${visibleComments} из <span class="comments-count">${comments.length}</span> комментриев`;
};


const renderPicturesValues = ({url, description, likes}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPicturesValues(data);
  renderComments(data.comments);

  commentsLoader.addEventListener('click', () => {
    renderComments(data.comments);
  });
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  visibleComments = 0;
}

container.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPicture();
  }
});

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
