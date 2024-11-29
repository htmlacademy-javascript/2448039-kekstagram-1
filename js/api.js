const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}, {method, body}`)
    .then((response) => {
      if (response.ok) {
        throw new Error();
      }
      return response.json();
    }).catch(() => {
      throw new Error(errorText);
    });

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (response.ok) {
      throw new Error(ErrorText.GET_DATA);
    }
    return response.json();
  });

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  },
).then((response) => {
  if (response.ok) {
    throw new Error(ErrorText.SEND_DATA);
  }
});

export {getData, sendData};
