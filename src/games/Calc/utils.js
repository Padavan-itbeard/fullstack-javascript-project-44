import readlineSync from 'readline-sync';

const ANSWER = ['yes', 'no'];

function getRndInteger(maxRange) {
  const rnd = Math.floor(Math.random() * maxRange);

  return rnd;
}

function getRndOperatorByOperators(operators) {
  const idx = getRndInteger(operators.length);
  const operator = operators[idx];

  return operator;
}

function getUserName() {
  const name = readlineSync.question('May I have your name? ') || 'Noname';

  return name;
}

function askQuestion(expr) {
  console.log(`Question: ${expr}`);
}

function getAnswer() {
  const answ = readlineSync.question('Your answer: ');

  return answ;
}

function exprToStr(operands, operator) {
  const uniteStr = ` ${operator} `;

  return operands.join(uniteStr);
}

function calc(expr) {
  // eslint-disable-next-line no-new-func
  return new Function(`return ${expr}`)();
}

function youWrong(name, answer, res) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${name}!`);
}

function youWinRound() {
  console.log('Correct!');
}

function youWin(name) {
  console.log(`Congratulations, ${name}!`);
}

export {
  getUserName,
  getRndInteger,
  askQuestion,
  getAnswer,
  getRndOperatorByOperators,
  exprToStr,
  calc,
  youWrong,
  youWinRound,
  youWin,
};
