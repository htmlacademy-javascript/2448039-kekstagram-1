const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onButtonScaleSmallerClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onButtonScaleBiggerClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

buttonScaleSmaller.addEventListener('click', onButtonScaleSmallerClick);
buttonScaleBigger.addEventListener('click', onButtonScaleBiggerClick);

const resetScale = () => scaleImage(DEFAULT_SCALE);

export {resetScale};
