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

function btnListener() {
  alert('test message');
}

const listeners = {
  btn: function () {
    alert('test message');
  },
};

btn.addEventListener('click', listeners.btn);

btn.removeEventListener('click', listeners.btn);
