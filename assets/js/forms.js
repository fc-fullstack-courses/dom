const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const todo = document.getElementById('todo-list');
/*
при отправке формы
записать в спан значение инпута
инпут находит через document.* нельзя
*/
form.addEventListener('submit', (e) => {
  // предотвращает стандартное поведение при исполнении этого события
  e.preventDefault();
  const { target: formElem } = e;

  // span.textContent = formElem.elements.input.value;

  // создание элемента
  const testLi = document.createElement('li');

  // заполнить текстом
  testLi.textContent = formElem.elements.input.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'X';
  testLi.append(deleteBtn);

  deleteBtn.addEventListener('click', (e) => {
    // написать такой слушатель, при исполнении которого будет
    // удаляться наша лишка
    // использовать Element.remove()
  });

  // вставить лишку в конец формы
  todo.append(testLi);
});
