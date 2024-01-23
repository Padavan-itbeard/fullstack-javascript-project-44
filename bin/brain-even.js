#!/usr/bin/env node

import runEngine from '../src/index.js';
import generateRound from '../src/games/Even/index.js';

runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
