import { ANSWER, MAX_ROUND } from '../../consts.js';
import * as utils from '../../utils.js';

/** RND < MAX_RND_RANGE */
const MAX_RND_RANGE = 101;

function evenGame(name) {
  console.log(`Answer "${ANSWER[0]}" if the number is even, otherwise answer "${ANSWER[1]}".`);

  let round = 1;
  let win = true;

  do {
    const num = utils.getRndInteger(MAX_RND_RANGE);

    utils.askQuestion(num);

    const answer = utils.getAnswer();
    const idx = num % 2;
    const isCorrect = ANSWER[idx] === answer;

    win = utils.check(isCorrect, name, answer, ANSWER[idx]);
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default evenGame;
