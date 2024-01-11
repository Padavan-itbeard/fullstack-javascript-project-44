import { MAX_RND_RANGE, MAX_ROUND } from '../../consts.js';
import * as utils from '../../utils.js';
import { calc, exprToStr, getRndOperatorByOperators } from './utils.js';

const OPERATORS = ['+', '-', '*'];

function calcGame(name) {
  console.log('What is the result of the expression?');

  let round = 1;
  let win = true;

  do {
    const num1 = utils.getRndInteger(MAX_RND_RANGE);
    const num2 = utils.getRndInteger(MAX_RND_RANGE);
    const operator = getRndOperatorByOperators(OPERATORS);
    const exprStr = exprToStr([num1, num2], operator);

    utils.askQuestion(exprStr);

    const answerStr = utils.getAnswer();
    const answerNumb = parseInt(answerStr, 10);
    const res = calc(exprStr);
    const isNumberAnswer = !Number.isNaN(answerNumb);
    const isCorrect = isNumberAnswer && res === answerNumb;

    win = utils.check(isCorrect, name, answerStr, res);
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default calcGame;
