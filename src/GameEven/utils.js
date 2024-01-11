import readlineSync from 'readline-sync';

/** RND < MAX_RND_RANGE */
const MAX_RND_RANGE = 101;
const ANSWER = ['yes', 'no'];

function getRndInteger() {
  const rnd = Math.floor(Math.random() * MAX_RND_RANGE);

  return rnd;
}

function getUserName() {
  const name = readlineSync.question('May I have your name? ') || 'Noname';

  return name;
}

function askQuestion(num) {
  console.log(`Question: ${num}`);
}

function getAnswer() {
  const answ = readlineSync.question('Your answer: ');

  return answ;
}

function youWrong(name, answer, isEven) {
  const correct = isEven ? ANSWER[0] : ANSWER[1];

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
}

function youWin(name) {
  console.log(`Congratulations, ${name}!`);
}

function youWinRound() {
  console.log('Correct!');
}

export {
  getUserName,
  getRndInteger,
  youWrong,
  youWin,
  youWinRound,
  askQuestion,
  getAnswer,
  ANSWER,
};
