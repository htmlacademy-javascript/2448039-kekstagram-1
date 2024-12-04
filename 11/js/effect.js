const valueElement = document.querySelector('.effect-level__value');
const imageElement = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effects = document.querySelector('.effects');

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const onSliderElementUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();

  if (isDefault()) {
    imageElement.style.filter = DEFAULT_EFFECT.style;
  } else {
    imageElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  valueElement.value = sliderValue;
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const closeSlider = () => {
  sliderContainer.classList.add('hidden');
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
closeSlider();

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    closeSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const addEffectsEventListners = () => {
  sliderElement.noUiSlider.on('update', onSliderElementUpdate);
  effects.addEventListener('change', onEffectsChange);
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  sliderElement.noUiSlider.off('update', onSliderElementUpdate);
  effects.removeEventListener('change', onEffectsChange);
  updateSlider();
};

export {resetEffects, addEffectsEventListners};
