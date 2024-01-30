import getRandomInRange from '../../utils.js';
import engine from '../../index.js';

function NOD(num1, num2) {
  let x = num1;
  let y = num2;

  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  x += y;

  return x;
}

function generateRound() {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `${num1} ${num2}`;
  const answer = NOD(num1, num2).toString();

  return [question, answer];
}
export default () => engine('Find the greatest common divisor of given numbers.', generateRound);
