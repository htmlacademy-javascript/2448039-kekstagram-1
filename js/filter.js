const PICTURES__COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;
const compareCommentsCount = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return pictures.sort(sortRandomly).slice(0, PICTURES__COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(compareCommentsCount);
    default:
      return [...pictures];
  }
};

const setOnFilterClick = (cb) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    filterElement.querySelectorAll('.img-filters__button').forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');

    currentFilter = evt.target.id;
    cb(getFilteredPictures());
  });
};

const init = (loaderPictures, cb) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loaderPictures];
  setOnFilterClick(cb);
};

export {init, getFilteredPictures};
