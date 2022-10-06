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
