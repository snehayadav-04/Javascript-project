let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number(cannot be negative)');
  } else if (guess > 100) {
    alert('Please enter a valid number less than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuesses === 11) {
      displayGuess(guess);
      DisplayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    DisplayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    DisplayMessage('You guess was somewhat low');
  } else if (guess > randomNumber) {
    DisplayMessage('You guess too much high ');
  }
}

function DisplayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>}`
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
     randomNumber = parseInt(Math.random() * 100 + 1);
     prevGuess = []
     newGuess = 1
     guessSlot.innerHTML = ''
     remaining.innerHTML = `${11 - numOfGuesses}`
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)
     playGame = true
}
    
  )
}
function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game </h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()
}
