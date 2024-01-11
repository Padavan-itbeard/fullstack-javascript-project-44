import { ANSWER, MAX_ROUND } from '../../consts.js';
import {
  askQuestion,
  getAnswer,
  getRndInteger,
  youWinRound,
  youWrong,
} from '../../utils.js';

/** RND < MAX_RND_RANGE */
const MAX_RND_RANGE = 101;

function evenGame(name) {
  console.log(`Answer "${ANSWER[0]}" if the number is even, otherwise answer "${ANSWER[1]}".`);

  let round = 1;
  let win = true;

  do {
    const num = getRndInteger(MAX_RND_RANGE);

    askQuestion(num);

    const answer = getAnswer();
    const idx = num % 2;

    if (ANSWER[idx] === answer) {
      youWinRound();
    } else {
      win = false;
      youWrong(name, answer, ANSWER[idx]);
    }
    round += 1;
  } while (win && round <= MAX_ROUND);

  return win;
}

export default evenGame;
