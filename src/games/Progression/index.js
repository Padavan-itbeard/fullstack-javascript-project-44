import genProgression from './utils.js';
import * as utils from '../../utils.js';
import { MAX_ROUND } from '../../consts.js';

function progressionGame(name) {
  console.log('What number is missing in the progression?');

  let round = 1;
  let win = true;

  do {
    const progression = genProgression();
    const idx = utils.getRndInteger(progression.length);
    const res = progression[idx];

    progression[idx] = '..';
    utils.askQuestion(progression.join(' '));

    const answerStr = utils.getAnswer();
    const answerNumb = parseInt(answerStr, 10);
    const isNumberAnswer = !Number.isNaN(answerNumb);
    const isCorrect = isNumberAnswer && res === answerNumb;

    win = utils.check(isCorrect, name, answerStr, res);
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default progressionGame;
