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

  // v1
  // deleteBtn.addEventListener('click', (e) => {
  //   testLi.remove();
  // });

  deleteBtn.addEventListener('click', why());

  // вставить лишку в конец формы
  todo.append(testLi);
});

// v2
function deleteListener(e) {
  // написать такой слушатель, при исполнении которого будет
  // удаляться наша лишка
  // использовать Element.remove()
  // * не пользоватся переменными из замыкания при удалении лишки

  e.target.parentElement.remove();

  // удаляем форму просто так
  // e.target.parentElement.parentElement.parentElement.children[1].remove();
}

function why() {
  let deleted;
  let isDeleted = false;

  return (e) => {
    if (isDeleted) {
      e.target.parentElement.parentElement.parentElement.append(deleted);
      isDeleted = false;
    } else {
      deleted = e.target.parentElement.parentElement.parentElement.children[1];

      deleted.remove();
      isDeleted = true;
    }
  };
}
