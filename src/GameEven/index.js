import {
  ANSWER,
  askQuestion,
  getAnswer,
  getRndInteger,
  getUserName,
  youWin,
  youWinRound,
  youWrong,
} from './utils.js';

const MAX_ROUND = 3;

console.log('Welcome to the Brain Games!');

const name = getUserName();

console.log(`Hello, ${name}!`);
console.log(`Answer "${ANSWER[0]}" if the number is even, otherwise answer "${ANSWER[1]}".`);

let round = 1;
let win = true;

do {
  const num = getRndInteger();

  askQuestion(num);
  const answer = getAnswer();
  const idx = num % 2;

  if (ANSWER[idx] === answer) {
    youWinRound();
  } else {
    const isEven = idx === 0;

    win = false;
    youWrong(name, answer, isEven);
  }
  round += 1;
} while (win && round <= MAX_ROUND);

if (win) {
  youWin(name);
}
