const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

const listener = (e) => {
  e.stopPropagation(); // отменяет дальнейшее всплытие событий
  console.log(e.currentTarget);
};

btn.addEventListener('click', listener);
document.body.addEventListener('click', listener);

form.addEventListener('submit', (e) => {
  // предотвращает стандартное поведение при исполнении этого события
  e.preventDefault();
  console.log(input.value);
});
