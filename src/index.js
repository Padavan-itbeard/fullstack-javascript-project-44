import { getUserName, youWin } from './utils.js';

function app(game) {
  console.log('Welcome to the Brain Games!');

  const name = getUserName();

  console.log(`Hello, ${name}!`);

  const win = game(name);

  if (win) {
    youWin(name);
  }
}

export default app;
