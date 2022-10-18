const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);
/**
 *
 * @param {object} user
 * @returns {HTMLElement}
 */
function createUserCard(user) {
  const { firstName, lastName, profilePicture } = user;

  const fullName =
    !firstName && !lastName ? 'No Data' : `${firstName} ${lastName}`;

  const imgWrapper = createImage({
    fullName,
    profilePicture,
  });

  /*
    Созадать функцию, которая бы подчистила процесс создания 
    cardInfo 
    за пример взять createImage
  */

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('cardInfo');

  const cardName = document.createElement('h1');
  cardName.classList.add('cardName');

  cardName.textContent = fullName;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('cardDescription');
  cardDescription.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
aut placeat ullam beatae expedita et sapiente quaerat?
Laudantium cupiditate beatae placeat, iste ab aliquam facere ex
expedita porro, ipsa repellendus minus, illo a. Debitis expedita
a ut hic soluta necessitatibus?`;

  cardInfo.append(cardName, cardDescription);

  const article = createElement(
    'article',
    { className: 'workerCard' },
    imgWrapper,
    cardInfo
  );

  return createElement('li', { className: 'workerItem' }, article);
}

function createImage(data) {
  const { fullName, profilePicture } = data;

  const initialsText =
    fullName === 'No Data' ? fullName : getInitials(fullName);
  const initials = createElement('p', { className: 'initials' }, initialsText);

  const img = createElement('img', {
    className: 'cardImg',
    eventListeners: {
      error: deleteHandler,
    },
    attributes: {
      alt: fullName,
      src: profilePicture,
    },
  });

  return createElement('div', { className: 'imgWrapper' }, initials, img);
}

function deleteHandler(e) {
  e.target.remove();
}

/**
 * Создает HTML и настраивает Ээемент
 * @param {string} tagName тег создаваемого элемента
 * @param {object} options обьект настроек для элемента
 * @param {string} options.className классы для элемента
 * @param {object} options.eventListeners обьект с функциями - слушателями
 * @param {object} options.attributes обьект атрибутами
 * @param  {...(Element | Node | string)} children - дочерние элементы, узлы или текст
 * @returns {HTMLElement}
 */
function createElement(tagName, options = {}, ...children) {
  const { className, eventListeners = {}, attributes = {} } = options;

  const elem = document.createElement(tagName);

  elem.className = className;

  /*
  eventListeners
  {
    'error': handleImageErrorV2,
    'click' : function(e) {
    }
  }

  [
    [
      'error',
      handleImageErrorV2
    ],
    [
      'click',
      function(e) {}
    ]
  ]
  */
  for (const [eventType, listener] of Object.entries(eventListeners)) {
    elem.addEventListener(eventType, listener);
  }
  /*
  attributes 
  {
    'src' :'string',
    'alt': 'string alt'
  }
  */

  for (const [attrName, value] of Object.entries(attributes)) {
    elem.setAttribute(attrName, value);
  }

  elem.append(...children);

  return elem;
}
