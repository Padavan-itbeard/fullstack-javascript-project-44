import getRandomInRange from '../../utils.js';
import engine from '../../index.js';

function genProgression() {
  const start = getRandomInRange();
  const delta = getRandomInRange();
  const progressionGame = [start];

  for (let i = 1; i < 10; i += 1) {
    const next = progressionGame[i - 1] + delta;

    progressionGame.push(next);
  }

  return progressionGame;
}

function generateRound() {
  const progression = genProgression();
  const idx = getRandomInRange(0, progression.length - 1);
  const answer = progression[idx].toString();

  progression[idx] = '..';

  const question = progression.join(' ');

  return [question, answer];
}

export default () => engine('What number is missing in the progression?', generateRound);
