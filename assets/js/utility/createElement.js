function createElement(tagName, options = {}, ...children) {
  const { className, eventListeners = {}, attributes = {} } = options;

  const elem = document.createElement(tagName);

  elem.className = className;

  for (const [event, listener] of Object.entries(eventListeners)) {
    elem.addEventListener(event, listener);
  }

  for (const [attrName, value] of Object.entries(attributes)) {
    elem.setAttribute(attrName, value);
  }

  elem.append(...children);

  return elem;
}

/*
eventListeners
 {
  'error': handleImageErrorV2,
  'click' : function(e) {

  }
 }

 attributes 
 {
  'src' :'string',
  'alt': 'string alt'
 }
*/
