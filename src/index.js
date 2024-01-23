import readlineSync from 'readline-sync';

/** Number of matches */
const MAX_ROUND = 3;

function runEngine(msgRule, generateRound) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ') || 'Noname';

  console.log(`Hello, ${name}!`);
  console.log(msgRule);

  let countRound = 1;
  let win = true;

  do {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question('Your answer: ').toLowerCase();

    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      win = false;
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    }
    countRound += 1;
  } while (win && countRound <= MAX_ROUND);

  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default runEngine;
