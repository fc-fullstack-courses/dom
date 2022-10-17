const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);

function createUserCard(user) {
  const card = document.createElement('li');
  card.classList.add('workerItem');

  const article = document.createElement('article');
  article.classList.add('workerCard');

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');

  const img = document.createElement('img');
  img.classList.add('cardImg');
  img.alt = `${user.firstName} ${user.lastName} profile pic`;
  img.src = user.profilePicture;
  imgWrapper.append(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('cardInfo');

  const cardName = document.createElement('h1');
  cardName.classList.add('cardName');
  cardName.textContent = `${user.firstName} ${user.lastName}`;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('cardDescription');
  cardDescription.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
aut placeat ullam beatae expedita et sapiente quaerat?
Laudantium cupiditate beatae placeat, iste ab aliquam facere ex
expedita porro, ipsa repellendus minus, illo a. Debitis expedita
a ut hic soluta necessitatibus?`;

  cardInfo.append(cardName, cardDescription);
  article.append(imgWrapper, cardInfo);
  card.append(article);

  return card;
}
