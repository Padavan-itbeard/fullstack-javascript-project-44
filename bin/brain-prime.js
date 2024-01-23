#!/usr/bin/env node

import runEngine from '../src/index.js';
import generateRound from '../src/games/Prime/index.js';

runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
