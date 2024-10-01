//Функция поиска палиндрома
const searchPalindrome = function (string) {
  const newString = string.replaceAll(' ', '').toLowerCase(); //убирает пробелы и приводит к нижнему регистру
  const result = newString.split('').reverse().join(''); //разбивает строку на массив, переворачивает и склеивает в строку

  return (newString === result);
};

searchPalindrome('Лёша на полке клопа нашёл ');

//Функция возврата целого числа из строки
const getInteger = (string) => {
  const arrNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (typeof string === 'number') {
    return string;
  }
  const arrString = string.split(''); //разбивает строку на массив
  const newArray = [];
  for (const i of arrString) { //находит нужные символы
    if (arrNumber.includes(i)) {
      newArray.push(i);
    }
  }
  return parseInt(newArray.join(''), 10); //склеивавает массив в строку и возвращает целое число
};

getInteger('1 кефир, 0.5 батона');

//Функция возврата строки с добавленными символами до заданной длинны
const myPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) { //пока итоговая длина меньше минимальной, то к ней дополняется длинна из добавочных символов
    const newLength = result.length + pad.length;
    //если получившаяся длинна меньше или равна минимальной, то прибавляются все введенные символы, иначе прибавляется начальная часть до минимальной длинны
    const currentPad = newLength <= minLength ? pad : pad.slice(0, minLength - newLength);
    result = currentPad + result;
  }
  return result;
};

myPadStart('q', 4, 'werty');

//Функция для проверки длины строки
const checkLength = (string, maxLength) => {
  const result = string.length <= maxLength;
  return result;
};

checkLength('проверяемая строка', 20);
