import { MAX_ROUND, MAX_RND_RANGE } from '../../consts.js';
import * as utils from '../../utils.js';
import NOD from './utils.js';

function gcdGame(name) {
  console.log('Find the greatest common divisor of given numbers.');

  let round = 1;
  let win = true;

  do {
    const num1 = utils.getRndInteger(MAX_RND_RANGE);
    const num2 = utils.getRndInteger(MAX_RND_RANGE);

    utils.askQuestion(`${num1} ${num2}`);

    const answerStr = utils.getAnswer();
    const answerNumb = parseInt(answerStr, 10);
    const res = NOD(num1, num2);
    const isCorrect = res === answerNumb;

    if (!Number.isNaN(answerNumb) && isCorrect) {
      utils.youWinRound();
    } else {
      win = false;
      utils.youWrong(name, answerStr, res);
    }
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default gcdGame;
