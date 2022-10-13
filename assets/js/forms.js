const form = document.querySelector('#form1');
// const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const span = document.getElementById('span');

const listener = (e) => {
  e.stopPropagation(); // отменяет дальнейшее всплытие событий
  console.log(e.currentTarget);
};

// btn.addEventListener('click', listener);
// document.body.addEventListener('click', listener);

form.addEventListener('submit', (e) => {
  // предотвращает стандартное поведение при исполнении этого события
  e.preventDefault();
  const { target: formElem } = e;
  // console.dir(formElem);
  // console.log(formElem.elements);
  // const text = formElem.elements.input.value;
  console.log(input.value);

  span.textContent = formElem.elements.input.value;
});

/*
при отправке формы
записать в спан значение инпута
инпут находит через document.* нельзя
*/
// console.log(input21321.value);