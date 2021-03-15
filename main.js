/* Michael Sahadi
  Rock, Paper, Scissor
  2021
 */


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const message = document.querySelector('.modal');
// const score = document.querySelector('score');

const playerChoice = document.querySelector('.playerChoice');
const compChoice = document.querySelector('.compChoice');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const choice = document.querySelectorAll('[data-thing]');
const messages = document.querySelector('.messages');
const playAgain = document.querySelector('.playAgain');
let cs = 0;
let ps = 0;

const int = () => {
  cs = 0;
  ps = 0;
  compScore.textContent = cs;
  playerScore.textContent = ps;
  message.classList.add('hidden');
  playerChoice.classList.add('hidden');
  compChoice.classList.add('hidden');
}

int();

const computerPlay = () => {
  let compChoice;
  // min = Math.ceil(min);
  // max = Math.floor(max);
  const compRandom = Math.floor(Math.random() * 3);
  console.log(compRandom);
  if (compRandom === 0) {
    compChoice = 'rock';
  } else if (compRandom === 1) {
    compChoice = 'paper';
  } else if (compRandom === 2) {
    compChoice = 'scissor';
  }
  console.log(compChoice);
  return compChoice;
}

const gamePlay = pick => {
  let computerSelection = computerPlay();
  // const computerSelection = computerPlay(0, 2);
  compChoice.classList.remove('hidden');
  playerChoice.classList.remove('hidden');
  // message.classList.remove('hidden');
  let match = [computerSelection, pick];
  // console.log(pick.className);
  console.log(match);

  const loser = ['paperrock', 'scissorpaper', 'rockscissor'];
  const tie = ['paperpaper', 'rockrock', 'scissorscissor'];
  const winner = ['rockpaper', 'scissorrock', 'paperscissor'];

  for (let i = 0; i <= 3; i++) {
    if ((match[0] + match[1]) === loser[i]) {
      console.log(computerSelection);
      compChoice.src = `images/hand-${computerSelection}-regular.svg`;
      playerChoice.src = `images/hand-${pick}-regular.svg`;
      // messages.src = 'images/loser.svg';
      cs += 1;
      compScore.textContent = cs;
    } else if ((match[0] + match[1]) === tie[i]) {
      console.log(computerSelection);
      compChoice.src = `images/hand-${computerSelection}-regular.svg`;
      playerChoice.src = `images/hand-${pick}-regular.svg`;
    } else if ((match[0] + match[1]) === winner[i]) {
      console.log(computerSelection);
      compChoice.src = `images/hand-${computerSelection}-regular.svg`;
      playerChoice.src = `images/hand-${pick}-regular.svg`;
      // messages.src = 'images/winner.svg';
      ps += 1;
      playerScore.textContent = ps;
    }
  }
  if (cs >= 5) {
    message.classList.remove('hidden');
  }
}

choice.forEach(button => {
  button.addEventListener('click', () => {
    // button.style.borderColor = 'orange'
    gamePlay(button.className);
  })
});

playAgain.addEventListener('click', () => {
  int();
});
