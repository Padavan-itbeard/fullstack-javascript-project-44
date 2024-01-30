import getRandomInRange from '../../utils.js';
import engine from '../../index.js';

const PROGRESSION_LENGTH = 10;

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

function generateRound() {
  const start = getRandomInRange();
  const step = getRandomInRange();
  const progression = generateProgression(start, step, PROGRESSION_LENGTH);
  const idx = getRandomInRange(0, progression.length - 1);
  const answer = progression[idx].toString();

  progression[idx] = '..';

  const question = progression.join(' ');

  return [question, answer];
}

export default () => engine('What number is missing in the progression?', generateRound);
