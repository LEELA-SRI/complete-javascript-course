'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.guess').value = 55;

/*let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === number) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Correct Number!yippee';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'oops,its higher';
      score = score - 1;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        'u may wanna raise ur number';
      score -= 1;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
});

////////////again!
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  
  document.querySelector('.guess').value = '';
});*/

/*Math.trunc(Math.random()*20)*/
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent=10
document.querySelector('.guess').value=20
console.log(document.querySelector('.guess').value)*/

let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Choose a Number';
  } else if (guess === secretnum) {
    document.querySelector('.message').textContent = 'Yass!Slay Bitch';
    document.querySelector('.number').textContent = secretnum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score >= highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretnum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnum ? 'Tis High Oopsies!' : 'Raise Your Number Bestie ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Next Time Gertrude';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretnum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start guessing...';
});
