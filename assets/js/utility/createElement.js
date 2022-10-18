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
