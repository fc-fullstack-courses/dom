const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);

function createUserCard(user) {

  
}
