import { MAX_RND_RANGE } from '../../consts.js';
import { getRndInteger } from '../../utils.js';

function genProgression() {
  const start = getRndInteger(MAX_RND_RANGE);
  const delta = getRndInteger(MAX_RND_RANGE);
  const progressionGame = [start];

  for (let i = 1; i < 10; i += 1) {
    const next = progressionGame[i - 1] + delta;

    progressionGame.push(next);
  }

  return progressionGame;
}

export {
  genProgression,
};
