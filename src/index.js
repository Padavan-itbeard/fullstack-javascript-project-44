import readlineSync from 'readline-sync';

/** Number of matches */
const MAX_ROUND = 3;

function runEngine(msgRule, generateRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || 'Noname';
  console.log(`Hello, ${name}!`);
  console.log(msgRule);

  for (let i = 0; i < MAX_ROUND; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ').toLowerCase();

    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default runEngine;
