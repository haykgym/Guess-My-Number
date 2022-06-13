'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '14';
// document.querySelector('.score').textContent = '17';

let secretNumber = getNumber();
let score = 20;
let highestScore = 1;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function getNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function getScore(score) {
  document.querySelector('.score').textContent = score;
}

function getStyle(color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!!');
    getStyle('#60b347', '30rem');
    displayNumber(secretNumber);

    if (highestScore <= score) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high ^' : 'Too low ~~');
      score--;
      getScore(score);
    } else {
      displayMessage('You lost the game');
      getScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getNumber();
  score = 20;
  displayMessage('Start guessing...');
  getStyle('#222', '15rem');
  getScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
});

