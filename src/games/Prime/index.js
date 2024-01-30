import getRandomInRange from '../../utils.js';
import engine from '../../index.js';

const PRIMES = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101,
];

function generateRound() {
  const num = getRandomInRange();
  const isPrime = PRIMES.includes(num);

  const question = num.toString();
  const answer = isPrime ? 'yes' : 'no';

  return [question, answer];
}

export default () => engine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
