import readlineSync from 'readline-sync';

function getUserName() {
  const name = readlineSync.question('May I have your name? ') || 'Noname';

  return name;
}

function getAnswer() {
  const answer = readlineSync.question('Your answer: ');

  return answer;
}

function getRndInteger(maxRange) {
  const rnd = Math.floor(Math.random() * maxRange);

  return rnd;
}

function askQuestion(msg) {
  console.log(`Question: ${msg}`);
}

function youWinRound() {
  console.log('Correct!');
}

function youWin(name) {
  console.log(`Congratulations, ${name}!`);
}

function youWrong(name, answer, res) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
}

export {
  getUserName,
  getAnswer,
  askQuestion,
  youWinRound,
  youWin,
  getRndInteger,
  youWrong,
};
