import getRandomInRange from '../../utils.js';
import engine from '../../index.js';

function generateRound() {
  const num = getRandomInRange();
  const even = num % 2 === 0;
  const question = num.toString();
  const answer = even ? 'yes' : 'no';

  return [question, answer];
}

export default () => engine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
