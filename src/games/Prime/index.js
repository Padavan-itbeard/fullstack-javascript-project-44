import { ANSWER, MAX_RND_RANGE, MAX_ROUND } from '../../consts.js';
import * as utils from '../../utils.js';

const PRIMES = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101,
];

function primeGame(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let round = 1;
  let win = true;

  do {
    const num = utils.getRndInteger(MAX_RND_RANGE);

    utils.askQuestion(num);

    const answer = utils.getAnswer();
    const isPrime = PRIMES.includes(num);
    const idx = isPrime ? 0 : 1;
    const isCorrect = answer === ANSWER[idx];

    if (isCorrect) {
      utils.youWinRound();
    } else {
      win = false;
      utils.youWrong(name, answer, ANSWER[idx]);
    }
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default primeGame;
