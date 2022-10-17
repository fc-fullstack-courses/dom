const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);

function createUserCard(user) {
  const fullName =
    !user.firstName && !user.lastName
      ? 'No Data'
      : `${user.firstName} ${user.lastName}`;

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');

  const initials = document.createElement('p');
  initials.classList.add('initials');
  initials.textContent =
    fullName === 'No Data' ? fullName : getInitials(fullName);

  const img = document.createElement('img');
  img.classList.add('cardImg');
  img.alt = `${fullName}`;
  img.src = user.profilePicture;
  // img.addEventListener('error', handleImageErrorV1);
  img.addEventListener('error', handleImageErrorV2);

  imgWrapper.append(initials, img);

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
