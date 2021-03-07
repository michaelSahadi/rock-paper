
const computerPlay = (min, max) => {
  let compChoice;
  min = Math.ceil(min);
  max = Math.floor(max);
  const compRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  if (compRandom === 0) {
    compChoice = 'rock';
  } else if (compRandom === 1) {
    compChoice = 'paper';
  } else {
    compChoice = 'scissor';
  }
  return compChoice;
}

for (let i = 0; i < 5; i++) {
  const computerSelection = computerPlay(0, 2);
  const playerSelection = prompt('Rock, Paper, Scissor');
  const player = playerSelection.toLowerCase()
  const winner = (computerSelection, player) => {
    if (computerSelection === player) {
      return 'Its a tie!'
    } else if (computerSelection === 'scissor' && player === 'rock') {
      return `You win! ${player} beats ${computerSelection}`
    } else if (computerSelection === 'rock' && player === 'scissor') {
      return `You loose! ${computerSelection} beats ${player}`
    } else if (computerSelection === 'paper' && player === 'scissor') {
      return `You win! ${player} beats ${computerSelection}`
    } else if (computerSelection === 'scissor' && player === 'paper') {
      return `You loose! ${computerSelection} beats ${player}`
    } else if (computerSelection === 'rock' && player === 'paper') {
      return `You win! ${player} beats ${computerSelection}`
    } else if (computerSelection === 'paper' && player === 'rock') {
      return `You loose! ${computerSelection} beats ${player}`
    }
  }
  console.log(winner(computerSelection, player));
}

    // console.log(`Player 1: ${player}`);
    // console.log(`Computer: ${computerSelection}`);


