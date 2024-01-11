import {
  getUserName,
  getRndInteger,
  askQuestion,
  getAnswer,
  getRndOperatorByOperators,
  exprToStr,
  calc,
  youWinRound,
  youWrong,
  youWin,
} from './utils.js';

const MAX_ROUND = 3;
/** RND < MAX_RND_RANGE */
const MAX_RND_RANGE = 101;
const OPERATORS = ['+', '-', '*'];

function calcGame() {
  console.log('Welcome to the Brain Games!');

  const name = getUserName();

  console.log(`Hello, ${name}!`);
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

  if (win) {
    youWin(name);
  }
}

export default calcGame;
