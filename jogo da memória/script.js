const gameBoard = document.getElementById('gameBoard');

let cards = [
  'imagens/cabra.webp','imagens/gato.webp','imagens/cachorro.webp','imagens/abelha.webp', 
  'imagens/cabra.webp','imagens/gato.webp','imagens/cachorro.webp','imagens/abelha.webp'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  gameBoard.innerHTML = '';
  shuffle(cards).forEach(imagePath => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = imagePath;

    const img = document.createElement('img');
    img.src = imagePath;
    img.classList.add('card-image');
    img.style.display = 'none'; // escondida até virar

    card.appendChild(img);
    card.addEventListener('click', revealCard);
    gameBoard.appendChild(card);
  });
}

function revealCard() {
  if (lockBoard || this.classList.contains('revealed')) return;

  const img = this.querySelector('img');
  img.style.display = 'block';
  this.classList.add('revealed');

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
  }
}

function checkMatch() {
  lockBoard = true;
  const img1 = firstCard.querySelector('img');
  const img2 = secondCard.querySelector('img');

  if (firstCard.dataset.image === secondCard.dataset.image) {
    resetTurn();
  } else {
    setTimeout(() => {
      img1.style.display = 'none';
      img2.style.display = 'none';
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

window.onload = () => {
  createBoard();
};
