import MAX_ROUND from '../../consts.js';
import { askQuestion, getAnswer, getRndInteger, youWinRound, youWrong } from '../../utils.js';
import { calc, exprToStr, getRndOperatorByOperators } from './utils.js';

/** RND < MAX_RND_RANGE */
const MAX_RND_RANGE = 101;
const OPERATORS = ['+', '-', '*'];

function calcGame(name) {
  console.log('What is the result of the expression?');

  let round = 1;
  let win = true;

  do {
    const num1 = getRndInteger(MAX_RND_RANGE);
    const num2 = getRndInteger(MAX_RND_RANGE);
    const operator = getRndOperatorByOperators(OPERATORS);
    const exprStr = exprToStr([num1, num2], operator);

    askQuestion(exprStr);

    const answerStr = getAnswer();
    const answerNumb = parseInt(answerStr, 10);
    const res = calc(exprStr);
    const isCorrect = res === answerNumb;

    if (!Number.isNaN(answerNumb) && isCorrect) {
      youWinRound();
    } else {
      win = false;
      youWrong(name, answerStr, res);
    }
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default calcGame;
