// window.document

// document

//  target.addEventListener(type, listener[, options]);

// с кем происходит событие (target) Element
const btn = document.getElementById('btn');
// что сделать (listener) function
function btnListener() {
  alert('Hello to DOM');
}
// когда происходит событие (type) string
btn.addEventListener('click', btnListener);

/*
  по нажатию на кнопку
  увеличивать некий счетчик 
  и выводит на экран его значение
*/
const clickerBtn = document.getElementById('clicker');

function clickerWrapper() {
  let counter = 0;

  return function clickerListener() {
    alert(++counter);
  };
}

// const clickerListener = clickerWrapper();
// clickerBtn.addEventListener('click', clickerListener);
clickerBtn.addEventListener('click', clickerWrapper());
