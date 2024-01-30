import getRandomInRange from '../../utils.js';
import engine from '../../index.js';

const OPERATORS = ['+', '-', '*'];

function calculateExpr(expr) {
  // eslint-disable-next-line no-new-func
  return new Function(`return ${expr}`)();
}

function generateRound() {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = OPERATORS[getRandomInRange(0, OPERATORS.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculateExpr(question).toString();

  return [question, answer];
}

export default () => engine('What is the result of the expression?', generateRound);
