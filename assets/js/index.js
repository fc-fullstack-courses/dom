// window.document

// document

//  target.addEventListener(type, listener[, options]);

// с кем происходит событие (target) Element
// const btn = document.getElementById('btn');
// // что сделать (listener) function
// function btnListener() {
//   alert('Hello to DOM');
// }
// // когда происходит событие (type) string
// btn.addEventListener('click', btnListener);

// /*
//   по нажатию на кнопку
//   увеличивать некий счетчик
//   и выводит на экран его значение
// */
// const clickerBtn = document.getElementById('clicker');

// function clickerWrapper(counter = 0) {
//   return function clickerListener(object) {
//     alert(++counter);
//   };
// }

// // const clickerListener = clickerWrapper();
// // clickerBtn.addEventListener('click', clickerListener);
// clickerBtn.addEventListener('click', clickerWrapper());

// поиск элементов в DOM

// 1  document.getElementById('clicker') по айдишнику

/*
document.
        getElementById('clicker')
        querySelector('.red')
        
        querySelectorAll('.red')
        
        getElementsByClassName('class1')
        getElementsByName('testInput')
        getElementsByTagName('p')
*/

// const elements = document.getElementsByClassName('red');
// const [div, p] = document.getElementsByClassName('red'); // по классу

// const [input] = document.getElementsByName('firstName'); // attribute name

// const elements = document.getElementsByTagName('button'); // по тегу элемента

// const elem = document.querySelector('.red'); // ищет по сss селекторам
// const elems = document.querySelectorAll('.red');

const btn = document.querySelector('#btn');
const div = document.querySelector('#div');

function btnListener(event) {
  // console.log(event.target); // елемент с которым происходит событие
  // console.log(event.currentTarget); // елемент на которм сидит обработчик

  // div.removeChild(btn);
  // console.log(div.attributes);
  // div.classList.add('container', 'test', 'IAmCustomMade');
  // console.log(div.classList);
  // div.classList.toggle('div');

  console.log(div.children);
}

btn.addEventListener('click', btnListener);
// div.addEventListener('click', btnListener);

// const mouseEvent = new MouseEvent('click');
// btn.dispatchEvent(mouseEvent);

// btn.textContent = 'Clicks: 0';
/*
  сделайте так чтобы ваш кликер отображал количество кликов
  на себе (на своей конпке на которую нажимаете)
*/

function clickerWrapper(counter = 0) {
  return function clickerListener(event) {
    event.target.textContent = `Clicks: ${++counter}`;
  };
}

btn.addEventListener('click', clickerWrapper());

const img = document.querySelector('#img');

// img.setAttribute(
//   'src',
//   'https://monsterlessons.com/api/storage/uploads/posters/dc0d9f79-412d-4531-b7d0-415b97c13e7f/poster.png'
// );

// https://mayertrade.com.ua/img/cms/bashnya/2.jpg

// 1 сохранить возможные значения
const imagesSrc = [
  // {
  //   alt: 'text',
  //   id: 0,
  //   src: 'https://monsterlessons.com/api/storage/uploads/posters/dc0d9f79-412d-4531-b7d0-415b97c13e7f/poster.png',
  // },
  // {
  //   alt: 'text',
  //   id: 1,
  //   src: 'https://monsterlessons.com/api/storage/uploads/posters/dc0d9f79-412d-4531-b7d0-415b97c13e7f/poster.png',
  // },
  'https://monsterlessons.com/api/storage/uploads/posters/dc0d9f79-412d-4531-b7d0-415b97c13e7f/poster.png',
  'https://mayertrade.com.ua/img/cms/bashnya/2.jpg',
  'https://www.xiper.net/assets/images/lessons/css/vf-html-document-tree.png',
];
// 2 знать, какая в данный момент стоит
let currentIndex = 0; // при 2 может быть булем

// 3 меняем на другую
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
nextBtn.addEventListener('click', (event) => {
  // event.target.setAttribute(
  //   'src',
  //   'https://mayertrade.com.ua/img/cms/bashnya/2.jpg'
  // );
  // img.setAttribute('src', 'https://mayertrade.com.ua/img/cms/bashnya/2.jpg');

  // currentIndex = currentIndex === imagesSrc.length - 1 ? 0 : currentIndex + 1;

  // 3 -> 0, 1, 2
  currentIndex = (currentIndex + 1) % imagesSrc.length;

  img.setAttribute('src', imagesSrc[currentIndex]);
  // img.setAttribute('src', imagesSrc[currentIndex++]);
  // if (currentIndex === imagesSrc.length) {
  //   currentIndex = 0;
  // }
});

prevBtn.addEventListener('click', () => {
  // currentIndex = (currentIndex + 1) % imagesSrc.length;
  currentIndex = currentIndex > 0 ? currentIndex - 1 : imagesSrc.length - 1;

  img.setAttribute('src', imagesSrc[currentIndex]);
});

const [redBtn, greenBtn, blueBtn] = document.querySelectorAll('.color-btn');
const text = document.querySelector('#text');

// redBtn.addEventListener('click', (e) => {
//   // text.classList.remove('green', 'blue');
//   text.className = '';
//   text.classList.add('red');
// });

// greenBtn.addEventListener('click', (e) => {
//   text.className = '';
//   text.classList.add('green');
// });

// blueBtn.addEventListener('click', (e) => {
//   text.className = '';
//   text.classList.add('blue');
// });

// redBtn.addEventListener('click', (e) => {
//   text.setAttribute('class', 'red');
// });

// greenBtn.addEventListener('click', (e) => {
//   text.setAttribute('class', 'green');
// });

// blueBtn.addEventListener('click', (e) => {
//   text.setAttribute('class', 'blue');
// });

function commonListener(e) {
  console.log(e);
  text.setAttribute('class', e.target.dataset.textColor);
}

redBtn.addEventListener('click', commonListener);

greenBtn.addEventListener('click', commonListener);

blueBtn.addEventListener('click', commonListener);
